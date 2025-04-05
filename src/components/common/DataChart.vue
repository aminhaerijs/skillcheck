<template>
    <div
        class="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
        <div class="max-w-full overflow-x-auto custom-scrollbar">
            <div class="-ml-4 min-w-[650px] xl:min-w-full pl-2 pb-5">
                <canvas ref="chartRef"></canvas>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ChartData } from '@/services/api/api.types';
import { ref, onMounted, watch } from 'vue'

const props = defineProps<{
    chartData: ChartData[]
}>()

const chartRef = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
    drawChart()
})

watch(() => props.chartData, () => {
    drawChart()
}, { deep: true, immediate: false })

const drawChart = (): void => {
    const canvas = chartRef.value
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const canvasWidth = 560
    const canvasHeight = 250
    canvas.width = canvasWidth
    canvas.height = canvasHeight

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const chartHeight = 180
    const maxDataValue = Math.max(...props.chartData.map(item => item.yValue))
    const barWidth = 40
    const spacing = 35
    const xStart = 50
    const yEnd = canvasHeight - 30
    const borderRadius = 8
    const ticks = 5

    ctx.setLineDash([4, 4])
    ctx.strokeStyle = '#ddd'

    const formatYAxisValue = (value: number): string => {
        if (value >= 1000) {
            return (value / 1000).toFixed(0) + 'k';
        }
        return value.toLocaleString();
    };

    for (let i = 0; i <= ticks; i++) {
        const yValue = (maxDataValue / ticks) * i;
        const yPos = yEnd - (yValue / maxDataValue) * chartHeight;

        ctx.fillStyle = '#888';
        ctx.font = '12px tahoma';
        const formattedYValue = formatYAxisValue(yValue);
        ctx.fillText(formattedYValue, 10, yPos + 4);

        ctx.beginPath();
        ctx.moveTo(xStart, yPos);
        ctx.lineTo(canvasWidth - 20, yPos);
        ctx.stroke();
    }
    ctx.setLineDash([])

    props.chartData.forEach((item, index) => {
        const barHeight = (item.yValue / maxDataValue) * chartHeight
        const x = xStart + index * (barWidth + spacing) + 10
        const y = yEnd - barHeight

        ctx.fillStyle = "#499FEC"

        drawRoundedRect(ctx, x, y, barWidth, barHeight, borderRadius)

        ctx.fillStyle = '#888'
        ctx.font = '12px sans-serif'
        ctx.fillText(item.xValue, x + 5, canvasHeight - 5)
    })
}

const drawRoundedRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
): void => {
    ctx.beginPath()
    ctx.moveTo(x + radius, y)
    ctx.lineTo(x + width - radius, y)
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
    ctx.lineTo(x + width, y + height)
    ctx.lineTo(x, y + height)
    ctx.lineTo(x, y + radius)
    ctx.quadraticCurveTo(x, y, x + radius, y)
    ctx.closePath()
    ctx.fill()
}
</script>
