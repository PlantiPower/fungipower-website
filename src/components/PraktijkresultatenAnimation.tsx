'use client'
import { Player, PlayerRef } from '@remotion/player'
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion'
import { useRef, useEffect } from 'react'

// ─── Card data ────────────────────────────────────────────────────────────────

type CardData = {
    type: 'range' | 'single' | 'double'
    from1: number; to1: number
    from2?: number; to2?: number
    prefix1?: string; prefix2?: string
    suffix: string
    label: string; sub: string
    accent: string; border: string; bg: string
}

const CARDS: CardData[] = [
    {
        type: 'range', from1: 0, to1: 48, from2: 0, to2: 94, suffix: '%',
        label: 'Silicium opname verdubbeld', sub: 'gietwater stabiel',
        accent: '#84cc16', border: 'rgba(132,204,22,0.35)', bg: 'rgba(132,204,22,0.12)',
    },
    {
        type: 'range', from1: 0, to1: 11, from2: 0, to2: 86, suffix: '%',
        label: 'Fosfor opname', sub: 'bij 45% hogere P-gift via gietwater',
        accent: '#34d399', border: 'rgba(52,211,153,0.25)', bg: 'rgba(52,211,153,0.08)',
    },
    {
        type: 'single', prefix1: '+', from1: 0, to1: 88, suffix: '%',
        label: 'Molybdeen in oud plantsap', sub: 'direct bewijs ALL12® · bij lagere Mo-gift',
        accent: '#34d399', border: 'rgba(52,211,153,0.25)', bg: 'rgba(52,211,153,0.08)',
    },
    {
        type: 'single', prefix1: '+', from1: 0, to1: 243, suffix: '%',
        label: 'IJzer beschikbaarheid in drain', sub: '+17% in jong plantsap',
        accent: '#84cc16', border: 'rgba(132,204,22,0.2)', bg: 'rgba(132,204,22,0.08)',
    },
    {
        type: 'single', prefix1: '+', from1: 0, to1: 46, suffix: '%',
        label: 'Zink beschikbaarheid', sub: '+46% in drain · +46% in oud plantsap',
        accent: '#84cc16', border: 'rgba(132,204,22,0.2)', bg: 'rgba(132,204,22,0.08)',
    },
    {
        type: 'double', prefix1: '−', from1: 0, to1: 42, prefix2: '−', from2: 0, to2: 46, suffix: '%',
        label: 'Selectieve ionen-exclusie', sub: 'Na −42% · Cl −46% in jong blad',
        accent: '#818cf8', border: 'rgba(99,102,241,0.25)', bg: 'rgba(99,102,241,0.08)',
    },
]

// Card appears every N frames
const CARD_STAGGER = 14
const COUNT_DURATION = 52

function easeOutCubic(t: number) { return 1 - Math.pow(1 - t, 3) }

function countUp(frame: number, startFrame: number, from: number, to: number) {
    const t = Math.max(0, Math.min(1, (frame - startFrame - 4) / COUNT_DURATION))
    return Math.round(from + (to - from) * easeOutCubic(t))
}

// ─── Single card composition component ───────────────────────────────────────

function CardItem({ card, cardIndex }: { card: CardData; cardIndex: number }) {
    const frame = useCurrentFrame()
    const { fps } = useVideoConfig()
    const start = 8 + cardIndex * CARD_STAGGER

    const progress = spring({
        frame: Math.max(0, frame - start),
        fps,
        config: { damping: 90, stiffness: 140, mass: 1.0 },
    })

    const opacity = interpolate(frame, [start, start + 10], [0, 1], {
        extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
    })
    const translateY = interpolate(progress, [0, 1], [24, 0])
    const scale = interpolate(progress, [0, 1], [0.97, 1])

    const n1 = countUp(frame, start, card.from1, card.to1)
    const n2 = countUp(frame, start, card.from2 ?? 0, card.to2 ?? 0)

    let numStr: string
    if (card.type === 'range')  numStr = `${n1}${card.suffix} → ${n2}${card.suffix}`
    else if (card.type === 'single') numStr = `${card.prefix1 ?? ''}${n1}${card.suffix}`
    else numStr = `${card.prefix1 ?? ''}${n1}${card.suffix} / ${card.prefix2 ?? ''}${n2}${card.suffix}`

    return (
        <div style={{
            opacity,
            transform: `translateY(${translateY}px) scale(${scale})`,
            background: card.bg,
            border: `1px solid ${card.border}`,
            borderRadius: 14,
            padding: '16px 20px 16px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 7,
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Accent top bar */}
            <div style={{
                position: 'absolute',
                top: 0, left: 20, right: 20,
                height: 1,
                background: `linear-gradient(90deg, transparent, ${card.accent}66, transparent)`,
                borderRadius: 1,
            }} />
            {/* Node indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 2 }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: card.accent, flexShrink: 0 }} />
                <div style={{
                    color: `${card.accent}99`,
                    fontSize: 8,
                    fontWeight: 800,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    fontFamily: "'Outfit', system-ui, sans-serif",
                }}>
                    Validated
                </div>
            </div>
            <div style={{
                fontFamily: "'Outfit', system-ui, sans-serif",
                fontWeight: 900,
                fontSize: 26,
                color: card.accent,
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                fontVariantNumeric: 'tabular-nums',
            }}>
                {numStr}
            </div>
            <div style={{
                color: 'rgba(255,255,255,0.88)',
                fontSize: 12,
                fontWeight: 700,
                lineHeight: 1.3,
                fontFamily: "'Outfit', system-ui, sans-serif",
                letterSpacing: '-0.01em',
            }}>
                {card.label}
            </div>
            <div style={{
                color: 'rgba(255,255,255,0.42)',
                fontSize: 12,
                lineHeight: 1.5,
                fontFamily: "'Outfit', system-ui, sans-serif",
            }}>
                {card.sub}
            </div>
        </div>
    )
}

// ─── Root composition ─────────────────────────────────────────────────────────

function PraktijkComp() {
    return (
        <AbsoluteFill style={{
            background: 'transparent',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 10,
            padding: '0 2px',
            alignContent: 'start',
        }}>
            {CARDS.map((card, i) => (
                <CardItem key={i} card={card} cardIndex={i} />
            ))}
        </AbsoluteFill>
    )
}

// Total duration: last card starts at 8 + 5*14 = 78, count-up 52 frames → ~130 frames
const DURATION = 140

// ─── Exported Player component ────────────────────────────────────────────────

export default function PraktijkresultatenAnimation() {
    const playerRef = useRef<PlayerRef>(null)
    const wrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const wrapper = wrapperRef.current
        const player = playerRef.current
        if (!wrapper) return

        // Freeze at last frame when animation ends
        const onEnded = () => { playerRef.current?.seekTo(DURATION - 1) }
        player?.addEventListener('ended', onEnded)

        // Use the snap container (main) as root so IntersectionObserver
        // correctly detects when this section scrolls into view
        const snapContainer = document.querySelector('main.snap-y') as Element | null

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    playerRef.current?.seekTo(0)
                    playerRef.current?.play()
                }
            },
            { root: snapContainer, threshold: 0.5 },
        )

        observer.observe(wrapper)
        return () => {
            observer.disconnect()
            player?.removeEventListener('ended', onEnded)
        }
    }, [])

    // compositionWidth/compositionHeight: 900×284 (aspect ≈ 3.17)
    // padding-bottom trick keeps correct aspect ratio regardless of container width
    const W = 900
    const H = 284

    return (
        <div ref={wrapperRef} style={{ width: '100%' }}>
            <div style={{ position: 'relative', width: '100%', paddingBottom: `${(H / W) * 100}%` }}>
                <div style={{ position: 'absolute', inset: 0 }}>
                    <Player
                        ref={playerRef}
                        component={PraktijkComp}
                        durationInFrames={DURATION}
                        fps={30}
                        compositionWidth={W}
                        compositionHeight={H}
                        style={{ width: '100%', height: '100%' }}
                        controls={false}
                        loop={false}
                        clickToPlay={false}
                        // Start at last frame so static end-state is visible before play
                        initialFrame={DURATION - 1}
                        spaceKeyToPlayOrPause={false}
                    />
                </div>
            </div>
        </div>
    )
}
