── CHANGELOG.md
├── LICENSE.md
├── README.md
├── Tone
│ ├── component
│ │ ├── AmplitudeEnvelope.js
│ │ ├── Analyser.js
│ │ ├── Channel.js
│ │ ├── Compressor.js
│ │ ├── CrossFade.js
│ │ ├── EQ3.js
│ │ ├── Envelope.js
│ │ ├── FFT.js
│ │ ├── FeedbackCombFilter.js
│ │ ├── Filter.js
│ │ ├── Follower.js
│ │ ├── FrequencyEnvelope.js
│ │ ├── Gate.js
│ │ ├── LFO.js
│ │ ├── Limiter.js
│ │ ├── LowpassCombFilter.js
│ │ ├── Merge.js
│ │ ├── Meter.js
│ │ ├── MidSideCompressor.js
│ │ ├── MidSideMerge.js
│ │ ├── MidSideSplit.js
│ │ ├── Mono.js
│ │ ├── MultibandCompressor.js
│ │ ├── MultibandSplit.js
│ │ ├── PanVol.js
│ │ ├── Panner.js
│ │ ├── Panner3D.js
│ │ ├── ScaledEnvelope.js
│ │ ├── Solo.js
│ │ ├── Split.js
│ │ ├── Volume.js
│ │ └── Waveform.js
│ ├── control
│ │ ├── CtrlInterpolate.js
│ │ ├── CtrlMarkov.js
│ │ ├── CtrlPattern.js
│ │ └── CtrlRandom.js
│ ├── core
│ │ ├── AudioNode.js
│ │ ├── Buffer.js
│ │ ├── Buffers.js
│ │ ├── Bus.js
│ │ ├── Clock.js
│ │ ├── Context.js
│ │ ├── Delay.js
│ │ ├── Draw.js
│ │ ├── Emitter.js
│ │ ├── Gain.js
│ │ ├── IntervalTimeline.js
│ │ ├── Listener.js
│ │ ├── Master.js
│ │ ├── Offline.js
│ │ ├── OfflineContext.js
│ │ ├── Param.js
│ │ ├── Timeline.js
│ │ ├── TimelineState.js
│ │ ├── Tone.js
│ │ ├── Transport.js
│ │ ├── TransportEvent.js
│ │ └── TransportRepeatEvent.js
│ ├── effect
│ │ ├── AutoFilter.js
│ │ ├── AutoPanner.js
│ │ ├── AutoWah.js
│ │ ├── BitCrusher.js
│ │ ├── Chebyshev.js
│ │ ├── Chorus.js
│ │ ├── Convolver.js
│ │ ├── Distortion.js
│ │ ├── Effect.js
│ │ ├── FeedbackDelay.js
│ │ ├── FeedbackEffect.js
│ │ ├── Freeverb.js
│ │ ├── JCReverb.js
│ │ ├── MidSideEffect.js
│ │ ├── Phaser.js
│ │ ├── PingPongDelay.js
│ │ ├── PitchShift.js
│ │ ├── Reverb.js
│ │ ├── StereoEffect.js
│ │ ├── StereoFeedbackEffect.js
│ │ ├── StereoWidener.js
│ │ ├── StereoXFeedbackEffect.js
│ │ ├── Tremolo.js
│ │ └── Vibrato.js
│ ├── event
│ │ ├── Event.js
│ │ ├── Loop.js
│ │ ├── Part.js
│ │ ├── Pattern.js
│ │ └── Sequence.js
│ ├── index.js
│ ├── instrument
│ │ ├── AMSynth.js
│ │ ├── DuoSynth.js
│ │ ├── FMSynth.js
│ │ ├── Instrument.js
│ │ ├── MembraneSynth.js
│ │ ├── MetalSynth.js
│ │ ├── MonoSynth.js
│ │ ├── Monophonic.js
│ │ ├── NoiseSynth.js
│ │ ├── PluckSynth.js
│ │ ├── PolySynth.js
│ │ ├── Sampler.js
│ │ └── Synth.js
│ ├── shim
│ │ ├── AnalyserNode.js
│ │ ├── AudioBuffer.js
│ │ ├── AudioContext.js
│ │ ├── BufferSourceNode.js
│ │ ├── ConstantSourceNode.js
│ │ ├── OfflineAudioContext.js
│ │ ├── OscillatorNode.js
│ │ ├── StereoPannerNode.js
│ │ └── WaveShaperNode.js
│ ├── signal
│ │ ├── Abs.js
│ │ ├── Add.js
│ │ ├── AudioToGain.js
│ │ ├── EqualPowerGain.js
│ │ ├── GainToAudio.js
│ │ ├── GreaterThan.js
│ │ ├── GreaterThanZero.js
│ │ ├── Modulo.js
│ │ ├── Multiply.js
│ │ ├── Negate.js
│ │ ├── Normalize.js
│ │ ├── Pow.js
│ │ ├── Scale.js
│ │ ├── ScaleExp.js
│ │ ├── Signal.js
│ │ ├── SignalBase.js
│ │ ├── Subtract.js
│ │ ├── TickSignal.js
│ │ ├── TransportTimelineSignal.js
│ │ ├── WaveShaper.js
│ │ └── Zero.js
│ ├── source
│ │ ├── AMOscillator.js
│ │ ├── BufferSource.js
│ │ ├── FMOscillator.js
│ │ ├── FatOscillator.js
│ │ ├── GrainPlayer.js
│ │ ├── Noise.js
│ │ ├── OmniOscillator.js
│ │ ├── Oscillator.js
│ │ ├── OscillatorNode.js
│ │ ├── PWMOscillator.js
│ │ ├── Player.js
│ │ ├── Players.js
│ │ ├── PulseOscillator.js
│ │ ├── Source.js
│ │ ├── TickSource.js
│ │ └── UserMedia.js
│ ├── type
│ │ ├── Frequency.js
│ │ ├── Midi.js
│ │ ├── Ticks.js
│ │ ├── Time.js
│ │ ├── TimeBase.js
│ │ ├── TransportTime.js
│ │ └── Type.js
│ └── version.js
├── build
│ ├── Tone.js
│ └── Tone.js.map
└── package.json
