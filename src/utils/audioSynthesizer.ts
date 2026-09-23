/**
 * Web Audio API synthesizer for authentic 1920s Bohemian literary cabaret atmosphere:
 * - Subtle vinyl crackle generator (filtered white noise pulses)
 * - Soft vintage upright piano arpeggiated chords (D minor / A minor melancholy bohemian progression)
 * Completely self-contained, no external mp3 assets needed.
 */

class CabaretAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private noiseNode: AudioBufferSourceNode | null = null;
  private intervalId: number | null = null;

  public init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  public start() {
    this.init();
    if (!this.ctx) return;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.18, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);

    // 1. Vinyl crackle generator
    this.startVinylNoise();

    // 2. Vintage Piano Chord Generator (melancholic 1920s salon progression)
    this.playBohemianSequence();

    this.isPlaying = true;
  }

  private startVinylNoise() {
    if (!this.ctx || !this.masterGain) return;
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      // Occasional crackles and soft hiss
      const hiss = (Math.random() * 2 - 1) * 0.02;
      const crackle = Math.random() < 0.0008 ? (Math.random() * 2 - 1) * 0.4 : 0;
      data[i] = hiss + crackle;
    }

    this.noiseNode = this.ctx.createBufferSource();
    this.noiseNode.buffer = buffer;
    this.noiseNode.loop = true;

    // Filter to sound like old gramophone
    const bandpass = this.ctx.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.setValueAtTime(1400, this.ctx.currentTime);
    bandpass.Q.setValueAtTime(1.2, this.ctx.currentTime);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.4, this.ctx.currentTime);

    this.noiseNode.connect(bandpass);
    bandpass.connect(noiseGain);
    noiseGain.connect(this.masterGain);
    this.noiseNode.start();
  }

  private playPianoNote(freq: number, delay: number, duration: number) {
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);

    // Warm vintage lowpass
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1600, this.ctx.currentTime + delay);

    const startTime = this.ctx.currentTime + delay;
    noteGain.gain.setValueAtTime(0, startTime);
    noteGain.gain.linearRampToValueAtTime(0.12, startTime + 0.03);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc.start(startTime);
    osc.stop(startTime + duration);
  }

  private playBohemianSequence() {
    // Vintage bohemian chord progression: Dm, Gm, A7, Dm
    const chordProgressions = [
      [146.83, 220.00, 261.63, 293.66], // Dm (D3, A3, C4, D4)
      [196.00, 233.08, 293.66, 349.23], // Gm (G3, Bb3, D4, F4)
      [220.00, 277.18, 329.63, 392.00], // A7 (A3, C#4, E4, G4)
      [146.83, 220.00, 293.66, 369.99], // Dm (add9)
    ];

    let step = 0;

    const playChordStep = () => {
      if (!this.isPlaying || !this.ctx) return;
      const notes = chordProgressions[step % chordProgressions.length];
      // Arpeggiate
      notes.forEach((freq, idx) => {
        this.playPianoNote(freq, idx * 0.22, 2.4);
      });

      // Ambient high chime
      if (Math.random() > 0.4) {
        const highNote = [440, 523.25, 587.33, 659.25, 698.46][Math.floor(Math.random() * 5)];
        this.playPianoNote(highNote, 0.8 + Math.random() * 0.4, 2.0);
      }

      step++;
    };

    playChordStep();
    this.intervalId = window.setInterval(playChordStep, 3200);
  }

  public stop() {
    if (this.noiseNode) {
      try {
        this.noiseNode.stop();
        this.noiseNode.disconnect();
      } catch {
        // ignore
      }
      this.noiseNode = null;
    }

    if (this.intervalId) {
      window.clearInterval(this.intervalId);
      this.intervalId = null;
    }

    if (this.masterGain && this.ctx) {
      this.masterGain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.5);
    }

    this.isPlaying = false;
  }
}

export const cabaretAudio = new CabaretAudioEngine();

/**
 * Speech Recitation via Web Speech API
 */
export function recitePoem(text: string, onEnd?: () => void) {
  if (!('speechSynthesis' in window)) return false;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ru-RU';
  utterance.rate = 0.88; // slightly slower, poetic and deliberate
  utterance.pitch = 0.95;

  if (onEnd) {
    utterance.onend = onEnd;
    utterance.onerror = onEnd;
  }

  window.speechSynthesis.speak(utterance);
  return true;
}

export function stopRecitation() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}
