// 随机数生成器网页版
let isGenerating = false;
let generationInterval = null;
let history = [];

// UA 检测 - 检测是否为手机端
function detectMobile() {
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileKeywords = ['android', 'iphone', 'ipad', 'ipod', 'windows phone', 'mobile'];
    return mobileKeywords.some(keyword => userAgent.includes(keyword));
}

// 显示手机端推广横幅
function showMobilePromo() {
    if (detectMobile()) {
        const promo = document.getElementById('mobile-promo');
        // 检查用户是否已经关闭过
        if (!localStorage.getItem('promoClosed')) {
            promo.classList.remove('hidden');
        }
    }
}

// 关闭推广横幅
function closePromo() {
    const promo = document.getElementById('mobile-promo');
    promo.classList.add('hidden');
    localStorage.setItem('promoClosed', 'true');
}

// 设置范围
function setRange(min, max) {
    document.getElementById('minValue').value = min;
    document.getElementById('maxValue').value = max;
    showToast(`已设置范围: ${min} - ${max}`);
}

// 获取随机数
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 切换生成状态
function toggleGeneration() {
    if (isGenerating) {
        stopGeneration();
    } else {
        startGeneration();
    }
}

// 开始生成
function startGeneration() {
    const minInput = document.getElementById('minValue');
    const maxInput = document.getElementById('maxValue');
    const resultDiv = document.getElementById('result');
    const btn = document.getElementById('generateBtn');
    const btnText = document.getElementById('btnText');

    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);

    // 验证输入
    if (isNaN(min) || isNaN(max)) {
        showToast('请输入有效的数字');
        return;
    }

    if (min > max) {
        showToast('最小值不能大于最大值');
        return;
    }

    // 检查数据溢出
    if (max > Number.MAX_SAFE_INTEGER || min < Number.MIN_SAFE_INTEGER) {
        showToast('数值超出有效范围');
        return;
    }

    isGenerating = true;
    btn.classList.add('generating');
    btnText.textContent = '停止抽取';
    btn.querySelector('.btn-icon').textContent = 'stop';

    // 开始快速切换数字动画
    generationInterval = setInterval(() => {
        const tempValue = getRandomNumber(min, max);
        resultDiv.textContent = tempValue;
        resultDiv.classList.add('animating');
        setTimeout(() => resultDiv.classList.remove('animating'), 100);
    }, 50);
}

// 停止生成
function stopGeneration() {
    if (!isGenerating) return;

    const minInput = document.getElementById('minValue');
    const maxInput = document.getElementById('maxValue');
    const resultDiv = document.getElementById('result');
    const btn = document.getElementById('generateBtn');
    const btnText = document.getElementById('btnText');

    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);

    clearInterval(generationInterval);

    // 生成最终结果
    const finalValue = getRandomNumber(min, max);
    resultDiv.textContent = finalValue;

    // 添加动画效果
    resultDiv.style.transform = 'scale(1.3)';
    setTimeout(() => {
        resultDiv.style.transform = 'scale(1)';
    }, 300);

    // 添加到历史记录
    addToHistory(min, max, finalValue);

    // 恢复按钮状态
    isGenerating = false;
    btn.classList.remove('generating');
    btnText.textContent = '开始抽取';
    btn.querySelector('.btn-icon').textContent = 'play_arrow';
}

// 添加到历史记录
function addToHistory(min, max, value) {
    const now = new Date();
    const time = now.toLocaleTimeString('zh-CN', { hour12: false });

    const item = {
        time: time,
        min: min,
        max: max,
        value: value
    };

    history.unshift(item);
    if (history.length > 50) {
        history.pop();
    }

    renderHistory();
}

// 渲染历史记录
function renderHistory() {
    const historyList = document.getElementById('historyList');

    if (history.length === 0) {
        historyList.innerHTML = '<div class="empty-history">暂无历史记录</div>';
        return;
    }

    historyList.innerHTML = history.map((item, index) => `
        <div class="history-item" style="animation-delay: ${index * 50}ms">
            <span class="history-time">${item.time}</span>
            <span class="history-content">于 ${item.min} 与 ${item.max} 间取得 ${item.value}</span>
        </div>
    `).join('');
}

// 清空历史记录
function clearHistory() {
    history = [];
    renderHistory();
    showToast('历史记录已清空');
}

// 复制结果
function copyResult() {
    const result = document.getElementById('result').textContent;
    if (result === '?') {
        showToast('请先生成随机数');
        return;
    }

    navigator.clipboard.writeText(result).then(() => {
        showToast('已复制到剪贴板');
    }).catch(() => {
        // 降级方案
        const textarea = document.createElement('textarea');
        textarea.value = result;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('已复制到剪贴板');
    });
}

// 显示 Toast 提示
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// 监听输入框回车事件
document.addEventListener('DOMContentLoaded', () => {
    showMobilePromo();

    const minInput = document.getElementById('minValue');
    const maxInput = document.getElementById('maxValue');

    minInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            maxInput.focus();
        }
    });

    maxInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            toggleGeneration();
        }
    });

    // 防止页面滚动时输入框失焦导致的问题
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && isGenerating) {
            stopGeneration();
        }
    });
});

// 页面加载完成后的入场动画
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 100}ms`;
    });
});
