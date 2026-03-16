'use client'
import { Player, PlayerRef } from '@remotion/player'
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion'
import { useRef, useEffect } from 'react'

const CARD_I18N: Record<string, { label: string; sub: string }[]> = {
    nl: [
        { label: 'Silicium opname verdubbeld', sub: 'gietwater stabiel' },
        { label: 'Fosfor opname', sub: 'bij 45% hogere P-gift via gietwater' },
        { label: 'Molybdeen in oud plantsap', sub: 'direct bewijs ALL12® · bij lagere Mo-gift' },
        { label: 'Zink in oud plantsap', sub: 'Zn · stabiele accumulatie' },
        { label: 'Selectieve ionen-exclusie', sub: 'Na −42% · Cl −46% in jong blad' },
    ],
    en: [
        { label: 'Silicon uptake doubled', sub: 'irrigation water stable' },
        { label: 'Phosphorus uptake', sub: 'at 45% higher P supply via irrigation' },
        { label: 'Molybdenum in old plant sap', sub: 'direct proof ALL12® · at lower Mo supply' },
        { label: 'Zinc in old plant sap', sub: 'Zn · stable accumulation' },
        { label: 'Selective ion exclusion', sub: 'Na −42% · Cl −46% in young leaf' },
    ],
    de: [
        { label: 'Silizium-Aufnahme verdoppelt', sub: 'Gießwasser stabil' },
        { label: 'Phosphoraufnahme', sub: 'bei 45% höherem P-Angebot via Gießwasser' },
        { label: 'Molybdän im alten Pflanzensaft', sub: 'Direktnachweis ALL12® · bei niedrigerer Mo-Gabe' },
        { label: 'Zink im alten Pflanzensaft', sub: 'Zn · stabile Akkumulation' },
        { label: 'Selektiver Ionenausschluss', sub: 'Na −42% · Cl −46% in jungem Blatt' },
    ],
}

type CardData = {
    type: 'range' | 'single' | 'double'
    from1: number; to1: number
    from2?: number; to2?: number
    prefix1?: string; prefix2?: string
    suffix: string
    label: string; sub: string
    accent: string
    featured?: boolean
    visual: 'cucumber' | 'root' | 'leaf' | 'cell' | 'membrane'
}

const CARDS: CardData[] = [
    {
        type: 'range', from1: 0, to1: 48, from2: 0, to2: 94, suffix: '%',
        label: 'Silicium opname verdubbeld', sub: 'gietwater stabiel',
        accent: '#84cc16', featured: true, visual: 'cucumber',
    },
    {
        type: 'range', from1: 0, to1: 11, from2: 0, to2: 86, suffix: '%',
        label: 'Fosfor opname', sub: 'bij 45% hogere P-gift via gietwater',
        accent: '#84cc16', visual: 'root',
    },
    {
        type: 'single', prefix1: '+', from1: 0, to1: 88, suffix: '%',
        label: 'Molybdeen in oud plantsap', sub: 'direct bewijs ALL12® · bij lagere Mo-gift',
        accent: '#84cc16', visual: 'leaf',
    },
    {
        type: 'single', prefix1: '+', from1: 0, to1: 46, suffix: '%',
        label: 'Zink in oud plantsap', sub: 'Zn · stabiele accumulatie',
        accent: '#84cc16', visual: 'cell',
    },
    {
        type: 'double', prefix1: '−', from1: 0, to1: 42, prefix2: '−', from2: 0, to2: 46, suffix: '%',
        label: 'Selectieve ionen-exclusie', sub: 'Na −42% · Cl −46% in jong blad',
        accent: '#ffffff', visual: 'membrane',
    },
]

const CARD_STAGGER = 52
const LABEL_HOLD = 12
const COUNT_DURATION = 62

function easeOutCubic(t: number) { return 1 - Math.pow(1 - t, 3) }
function countUp(frame: number, startFrame: number, from: number, to: number) {
    const t = Math.max(0, Math.min(1, (frame - startFrame - LABEL_HOLD) / COUNT_DURATION))
    return Math.round(from + (to - from) * easeOutCubic(t))
}

// ─── Visual 1: Cucumber fills up (Silicium 48% → 94%) ────────────────────────
function CucumberVisual({ progress, accent }: { progress: number; accent: string }) {
    const W = 240, H = 30
    const fillPct = 48 + progress * 46
    const fillW = (fillPct / 100) * (W - 4)
    return (
        <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
            {/* Track */}
            <rect x={2} y={4} width={W - 4} height={H - 8} rx={11}
                fill={`${accent}0d`} stroke={`${accent}22`} strokeWidth={1} />
            {/* Fill */}
            <rect x={2} y={4} width={Math.max(0, fillW)} height={H - 8} rx={11}
                fill={`${accent}30`} />
            {/* Bright leading edge */}
            {fillW > 10 && (
                <rect x={fillW - 6} y={4} width={8} height={H - 8} rx={4}
                    fill={`${accent}70`} />
            )}
            {/* Before label */}
            <text x={8} y={H / 2 + 3.5} fill={`${accent}44`}
                fontSize={7.5} fontWeight={700} fontFamily="Outfit,sans-serif">48%</text>
            {/* Current value label */}
            <text x={Math.min(fillW - 4, W - 30)} y={H / 2 + 3.5}
                fill={accent} fontSize={8.5} fontWeight={900} fontFamily="Outfit,sans-serif"
                textAnchor="end">
                {Math.round(fillPct)}%
            </text>
            {/* After label (target) */}
            <text x={W - 6} y={H / 2 + 3.5} fill={`${accent}33`}
                fontSize={7.5} fontWeight={700} fontFamily="Outfit,sans-serif"
                textAnchor="end">94%</text>
        </svg>
    )
}

// ─── Visual 2: Root network grows (Fosfor 11% → 86%) ─────────────────────────
function RootVisual({ progress, accent }: { progress: number; accent: string }) {
    const W = 240, H = 38
    const cx = W / 2
    // Branches: [angle, length, x offset from center]
    const branches = [
        { a: 100, l: 28, ox: -70 }, { a: 80,  l: 24, ox: -40 },
        { a: 90,  l: 32, ox:   0 }, { a: 100, l: 24, ox:  40 },
        { a: 80,  l: 28, ox:  70 }, { a: 110, l: 18, ox: -55 },
        { a: 70,  l: 18, ox:  55 }, { a: 95,  l: 20, ox: -20 },
        { a: 85,  l: 20, ox:  20 },
    ]
    const rootY = 6
    return (
        <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMin meet">
            {/* Main stem */}
            <line x1={cx} y1={rootY} x2={cx} y2={rootY + progress * 10}
                stroke={accent} strokeWidth={1.5} strokeLinecap="round" opacity={0.8} />
            {/* Root branches */}
            {branches.map((b, i) => {
                const delay = i / branches.length
                const p = Math.max(0, (progress - delay * 0.5) * 2)
                const rad = (b.a * Math.PI) / 180
                const bx = cx + b.ox
                const by = rootY + 8
                const ex = bx + Math.cos(rad) * b.l * Math.min(1, p)
                const ey = by + Math.sin(rad) * b.l * Math.min(1, p)
                return (
                    <line key={i} x1={bx} y1={by} x2={ex} y2={ey}
                        stroke={accent} strokeWidth={Math.max(0.5, 1.2 - i * 0.1)}
                        strokeLinecap="round" opacity={0.5 + p * 0.4} />
                )
            })}
            {/* Root tip dots */}
            {branches.map((b, i) => {
                const delay = i / branches.length
                const p = Math.max(0, (progress - delay * 0.5) * 2)
                const rad = (b.a * Math.PI) / 180
                const bx = cx + b.ox
                const by = rootY + 8
                const ex = bx + Math.cos(rad) * b.l * Math.min(1, p)
                const ey = by + Math.sin(rad) * b.l * Math.min(1, p)
                return p > 0.3 ? (
                    <circle key={i} cx={ex} cy={ey} r={1.5}
                        fill={accent} opacity={0.6 * Math.min(1, p)} />
                ) : null
            })}
        </svg>
    )
}

// ─── Visual 3: Leaf deepens in color (Molybdeen +88%) ────────────────────────
function LeafVisual({ progress, accent }: { progress: number; accent: string }) {
    const W = 240, H = 44
    const cx = W / 2, cy = H / 2
    // Leaf opacity/saturation increases with progress
    const baseGreen = `rgba(132,204,22,${0.15 + progress * 0.55})`
    const strokeGreen = `rgba(132,204,22,${0.3 + progress * 0.5})`
    // Leaf path (teardrop pointing right)
    const lw = 88, lh = 22
    const path = `M ${cx - lw / 2} ${cy}
        C ${cx - lw / 2} ${cy - lh * 1.1}, ${cx} ${cy - lh * 1.2}, ${cx + lw / 2} ${cy}
        C ${cx} ${cy + lh * 1.2}, ${cx - lw / 2} ${cy + lh * 1.1}, ${cx - lw / 2} ${cy} Z`
    // Midrib line
    // Floating Mo particles
    const particles = [
        { x: cx - 20, y: cy - 5, delay: 0 },
        { x: cx + 15, y: cy + 4, delay: 0.3 },
        { x: cx - 5,  y: cy + 7, delay: 0.6 },
        { x: cx + 30, y: cy - 6, delay: 0.15 },
    ]
    return (
        <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
            {/* Leaf shadow */}
            <path d={path} fill={`rgba(132,204,22,0.05)`} transform="translate(2,2)" />
            {/* Leaf body */}
            <path d={path} fill={baseGreen} stroke={strokeGreen} strokeWidth={1} />
            {/* Midrib */}
            <line x1={cx - lw / 2 + 4} y1={cy} x2={cx + lw / 2 - 4} y2={cy}
                stroke={`rgba(132,204,22,${0.3 + progress * 0.3})`} strokeWidth={0.8} />
            {/* Mo particles */}
            {particles.map((p, i) => {
                const pp = Math.max(0, (progress - p.delay) / (1 - p.delay))
                return pp > 0 ? (
                    <g key={i}>
                        <circle cx={p.x} cy={p.y - pp * 4} r={2.5}
                            fill={`rgba(132,204,22,${pp * 0.7})`} />
                        <text x={p.x} y={p.y - pp * 4 + 3.5} textAnchor="middle"
                            fill={accent} fontSize={5} fontWeight={800}
                            fontFamily="Outfit,sans-serif" opacity={pp * 0.9}>Mo</text>
                    </g>
                ) : null
            })}
        </svg>
    )
}

// ─── Visual 4: Cell fills up (Zink +46%) ────────────────────────────────────
function CellVisual({ progress, accent }: { progress: number; accent: string }) {
    const W = 240, H = 36
    const cx = W / 2, cy = H / 2
    const r = 14
    // Fill level rises from bottom
    const fillHeight = progress * r * 1.85
    const clipY = cy + r - fillHeight
    return (
        <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
            <defs>
                <clipPath id="cellClip">
                    <rect x={cx - r} y={clipY} width={r * 2} height={fillHeight + 2} />
                </clipPath>
            </defs>
            {/* Cell outline */}
            <circle cx={cx} cy={cy} r={r}
                fill={`${accent}08`} stroke={`${accent}30`} strokeWidth={1} />
            {/* Cell fill */}
            <circle cx={cx} cy={cy} r={r - 1}
                fill={`${accent}30`} clipPath="url(#cellClip)" />
            {/* Zn labels floating up */}
            {[cx - 28, cx + 28, cx - 50, cx + 50].map((x, i) => {
                const delay = i * 0.2
                const pp = Math.max(0, (progress - delay) / (1 - delay))
                return pp > 0.1 ? (
                    <text key={i} x={x} y={cy + 4 - pp * 8}
                        fill={accent} fontSize={6.5} fontWeight={800}
                        fontFamily="Outfit,sans-serif" opacity={pp * 0.65}
                        textAnchor="middle">Zn</text>
                ) : null
            })}
            {/* Nucleus (inner circle) */}
            <circle cx={cx} cy={cy} r={4}
                fill={`${accent}18`} stroke={`${accent}40`} strokeWidth={0.8} />
        </svg>
    )
}

// ─── Visual 5: Na/Cl downward arrows with values ─────────────────────────────
function MembraneVisual({ progress }: { progress: number; accent: string }) {
    const W = 240, H = 52
    const naX = W * 0.28
    const clX = W * 0.72
    // Arrow shaft grows downward
    const arrowH = easeOutCubic(Math.min(1, progress * 1.2)) * 28
    const labelOpacity = Math.min(1, progress * 2)
    const valueOpacity = Math.min(1, Math.max(0, (progress - 0.3) * 2))

    return (
        <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
            {/* Na⁺ column */}
            <text x={naX} y={10} textAnchor="middle"
                fill={`rgba(248,113,113,${labelOpacity})`} fontSize={9}
                fontWeight={800} fontFamily="Outfit,sans-serif">Na⁺</text>
            {/* Arrow shaft */}
            <line x1={naX} y1={14} x2={naX} y2={14 + arrowH}
                stroke={`rgba(248,113,113,0.7)`} strokeWidth={2} strokeLinecap="round" />
            {/* Arrow head */}
            {arrowH > 4 && <>
                <line x1={naX - 5} y1={14 + arrowH - 6} x2={naX} y2={14 + arrowH}
                    stroke={`rgba(248,113,113,0.7)`} strokeWidth={2} strokeLinecap="round" />
                <line x1={naX + 5} y1={14 + arrowH - 6} x2={naX} y2={14 + arrowH}
                    stroke={`rgba(248,113,113,0.7)`} strokeWidth={2} strokeLinecap="round" />
            </>}
            {/* Value */}
            <text x={naX} y={H - 2} textAnchor="middle"
                fill={`rgba(248,113,113,${valueOpacity})`} fontSize={11}
                fontWeight={900} fontFamily="Outfit,sans-serif">−42%</text>

            {/* Divider */}
            <line x1={W / 2} y1={8} x2={W / 2} y2={H - 8}
                stroke={`rgba(255,255,255,0.08)`} strokeWidth={1} />

            {/* Cl⁻ column */}
            <text x={clX} y={10} textAnchor="middle"
                fill={`rgba(251,146,60,${labelOpacity})`} fontSize={9}
                fontWeight={800} fontFamily="Outfit,sans-serif">Cl⁻</text>
            <line x1={clX} y1={14} x2={clX} y2={14 + arrowH}
                stroke={`rgba(251,146,60,0.7)`} strokeWidth={2} strokeLinecap="round" />
            {arrowH > 4 && <>
                <line x1={clX - 5} y1={14 + arrowH - 6} x2={clX} y2={14 + arrowH}
                    stroke={`rgba(251,146,60,0.7)`} strokeWidth={2} strokeLinecap="round" />
                <line x1={clX + 5} y1={14 + arrowH - 6} x2={clX} y2={14 + arrowH}
                    stroke={`rgba(251,146,60,0.7)`} strokeWidth={2} strokeLinecap="round" />
            </>}
            <text x={clX} y={H - 2} textAnchor="middle"
                fill={`rgba(251,146,60,${valueOpacity})`} fontSize={11}
                fontWeight={900} fontFamily="Outfit,sans-serif">−46%</text>
        </svg>
    )
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function CardItem({ card, cardIndex }: { card: CardData; cardIndex: number }) {
    const frame = useCurrentFrame()
    const { fps } = useVideoConfig()
    const start = 8 + cardIndex * CARD_STAGGER

    const entranceProgress = spring({
        frame: Math.max(0, frame - start),
        fps,
        config: { damping: 85, stiffness: 100, mass: 1.1 },
    })

    const opacity = interpolate(frame, [start, start + 18], [0, 1], {
        extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
    })
    const translateY = interpolate(entranceProgress, [0, 1], [20, 0])
    const visualProgress = easeOutCubic(
        Math.max(0, Math.min(1, (frame - start - LABEL_HOLD) / COUNT_DURATION))
    )

    const n1 = countUp(frame, start, card.from1, card.to1)
    const n2 = countUp(frame, start, card.from2 ?? 0, card.to2 ?? 0)

    let numStr: string
    if (card.type === 'range') numStr = `${n1}% → ${n2}%`
    else if (card.type === 'single') numStr = `${card.prefix1 ?? ''}${n1}%`
    else numStr = `${card.prefix1 ?? ''}${n1}% / ${card.prefix2 ?? ''}${n2}%`

    const numFontSize = card.type === 'range' ? 23 : 31

    const Visual = () => {
        if (card.visual === 'cucumber') return <CucumberVisual progress={visualProgress} accent={card.accent} />
        if (card.visual === 'root')     return <RootVisual     progress={visualProgress} accent={card.accent} />
        if (card.visual === 'leaf')     return <LeafVisual     progress={visualProgress} accent={card.accent} />
        if (card.visual === 'cell')     return <CellVisual     progress={visualProgress} accent={card.accent} />
        return <MembraneVisual progress={visualProgress} accent={card.accent} />
    }

    return (
        <div style={{
            opacity,
            transform: `translateY(${translateY}px)`,
            background: card.featured ? 'rgba(132,204,22,0.055)' : 'rgba(255,255,255,0.02)',
            border: `1px solid ${card.featured ? 'rgba(132,204,22,0.2)' : 'rgba(255,255,255,0.06)'}`,
            borderLeft: `2.5px solid ${card.accent}`,
            borderRadius: 10,
            padding: '11px 13px 10px 12px',
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
        }}>
            {/* Label */}
            <div style={{
                color: 'rgba(255,255,255,0.92)',
                fontSize: 9.5,
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontFamily: "'Outfit', system-ui, sans-serif",
                lineHeight: 1.2,
            }}>
                {card.label}
            </div>

            {/* Number */}
            <div style={{
                fontFamily: "'Outfit', system-ui, sans-serif",
                fontWeight: 900,
                fontSize: numFontSize,
                color: card.accent,
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                fontVariantNumeric: 'tabular-nums',
            }}>
                {numStr}
            </div>

            {/* Visual — full width */}
            <Visual />

            {/* Sub */}
            <div style={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: 10,
                lineHeight: 1.4,
                fontFamily: "'Outfit', system-ui, sans-serif",
                letterSpacing: '0.01em',
            }}>
                {card.sub}
            </div>
        </div>
    )
}

// ─── Root composition ─────────────────────────────────────────────────────────

function PraktijkComp({ cards }: { cards?: { label: string; sub: string }[] }) {
    const mergedCards = CARDS.map((card, i) => ({
        ...card,
        ...(cards?.[i] ?? {}),
    }))
    return (
        <AbsoluteFill style={{
            background: 'transparent',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 9,
            padding: '1px 2px',
            alignContent: 'start',
        }}>
            {mergedCards.map((card, i) => (
                <CardItem key={i} card={card} cardIndex={i} />
            ))}
        </AbsoluteFill>
    )
}

const DURATION = 9999
const FREEZE_FRAME = 295

// ─── Exported Player component ────────────────────────────────────────────────

export default function PraktijkresultatenAnimation({ lang = 'nl' }: { lang?: string }) {
    const playerRef = useRef<PlayerRef>(null)
    const wrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const wrapper = wrapperRef.current
        const player = playerRef.current
        if (!wrapper) return

        const onFrame = () => {
            if ((playerRef.current?.getCurrentFrame() ?? 0) >= FREEZE_FRAME) {
                playerRef.current?.pause()
            }
        }
        player?.addEventListener('frameupdate', onFrame)

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
            player?.removeEventListener('frameupdate', onFrame)
        }
    }, [])

    const W = 900
    const H = 310

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
                        inputProps={{ cards: CARD_I18N[lang] ?? CARD_I18N.nl }}
                        style={{ width: '100%', height: '100%' }}
                        controls={false}
                        loop={false}
                        clickToPlay={false}
                        initialFrame={FREEZE_FRAME}
                        spaceKeyToPlayOrPause={false}
                    />
                </div>
            </div>
        </div>
    )
}
