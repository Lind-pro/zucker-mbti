// 应用状态
let currentQuestionIndex = 0;
let answers = {};
let scores = {
    EI: 0,  // E为正，I为负
    SN: 0,  // S为正，N为负
    TF: 0,  // T为正，F为负
    JP: 0   // J为正，P为负
};

// 页面切换函数
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// 开始测试
function startTest() {
    currentQuestionIndex = 0;
    answers = {};
    scores = { EI: 0, SN: 0, TF: 0, JP: 0 };
    showPage('test-page');
    loadQuestion();
}

// 加载问题
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-number').textContent = currentQuestionIndex + 1;
    document.getElementById('question-text').textContent = question.text;
    document.getElementById('progress-text').textContent = `${currentQuestionIndex + 1}/60`;

    // 更新进度条
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;

    // 清除之前的选择
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    // 如果之前已经回答过，恢复选择
    if (answers[currentQuestionIndex] !== undefined) {
        const selectedValue = answers[currentQuestionIndex];
        document.querySelectorAll('.option-btn').forEach(btn => {
            if (parseInt(btn.getAttribute('data-value')) === selectedValue) {
                btn.classList.add('selected');
            }
        });
        document.getElementById('next-btn').disabled = false;
    } else {
        document.getElementById('next-btn').disabled = true;
    }

    // 更新导航按钮状态
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
}

// 选择答案
function selectAnswer(value) {
    answers[currentQuestionIndex] = value;

    // 更新按钮样式
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
        if (parseInt(btn.getAttribute('data-value')) === value) {
            btn.classList.add('selected');
        }
    });

    // 启用下一题按钮
    document.getElementById('next-btn').disabled = false;

    // 自动跳转到下一题（添加短暂延迟以显示选择效果）
    setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        } else {
            // 最后一题，计算结果
            calculateResult();
        }
    }, 300);
}

// 上一题
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// 下一题
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        // 最后一题，计算结果
        calculateResult();
    }
}

// 计算结果
function calculateResult() {
    // 重置分数
    scores = { EI: 0, SN: 0, TF: 0, JP: 0 };

    // 计算每个维度的分数
    questions.forEach((question, index) => {
        const answer = answers[index];
        if (answer !== undefined) {
            const score = answer * question.direction;
            scores[question.dimension] += score;
        }
    });

    // 确定MBTI类型
    let mbtiType = '';
    mbtiType += scores.EI >= 0 ? 'E' : 'I';
    mbtiType += scores.SN >= 0 ? 'S' : 'N';
    mbtiType += scores.TF >= 0 ? 'T' : 'F';
    mbtiType += scores.JP >= 0 ? 'J' : 'P';

    // 显示结果
    showResult(mbtiType);
}

// 显示结果
function showResult(mbtiType) {
    showPage('result-page');

    // 显示MBTI类型
    document.getElementById('mbti-type').textContent = mbtiType;

    // 显示昵称和描述
    const typeInfo = typeDescriptions[mbtiType];
    document.getElementById('mbti-nickname').textContent = typeInfo.nickname + ' - ' + typeInfo.title;
    document.getElementById('type-description').innerHTML = typeInfo.description;

    // 计算并显示各维度的百分比
    displayDimensionScores();

    // 更新雷达图
    updateRadarChart();

    // 显示性格特征标签
    displayTraits(typeInfo.traits);

    // 显示同类型名人
    displayCelebrities(typeInfo.celebrities);

    // 显示匹配度
    displayCompatibility(typeInfo.compatibility);
}

// 显示维度分数
function displayDimensionScores() {
    // 计算每个维度的最大可能分数 (15题 × 5分)
    const maxScore = 75;

    // EI 维度
    const eiPercentage = ((Math.abs(scores.EI) / maxScore) * 100).toFixed(0);
    const eiType = scores.EI >= 0 ? 'E' : 'I';
    const eiPosition = scores.EI >= 0 ? 50 - (eiPercentage / 2) : 50 + (eiPercentage / 2);
    document.getElementById('ei-fill').style.width = `${eiPosition}%`;
    document.getElementById('ei-percentage').textContent = `${eiType}: ${eiPercentage}%`;

    // SN 维度
    const snPercentage = ((Math.abs(scores.SN) / maxScore) * 100).toFixed(0);
    const snType = scores.SN >= 0 ? 'S' : 'N';
    const snPosition = scores.SN >= 0 ? 50 - (snPercentage / 2) : 50 + (snPercentage / 2);
    document.getElementById('sn-fill').style.width = `${snPosition}%`;
    document.getElementById('sn-percentage').textContent = `${snType}: ${snPercentage}%`;

    // TF 维度
    const tfPercentage = ((Math.abs(scores.TF) / maxScore) * 100).toFixed(0);
    const tfType = scores.TF >= 0 ? 'T' : 'F';
    const tfPosition = scores.TF >= 0 ? 50 - (tfPercentage / 2) : 50 + (tfPercentage / 2);
    document.getElementById('tf-fill').style.width = `${tfPosition}%`;
    document.getElementById('tf-percentage').textContent = `${tfType}: ${tfPercentage}%`;

    // JP 维度
    const jpPercentage = ((Math.abs(scores.JP) / maxScore) * 100).toFixed(0);
    const jpType = scores.JP >= 0 ? 'J' : 'P';
    const jpPosition = scores.JP >= 0 ? 50 - (jpPercentage / 2) : 50 + (jpPercentage / 2);
    document.getElementById('jp-fill').style.width = `${jpPosition}%`;
    document.getElementById('jp-percentage').textContent = `${jpType}: ${jpPercentage}%`;
}

// 重新测试
function restartTest() {
    showPage('welcome-page');
}

// 分享结果
function shareResult() {
    const mbtiType = document.getElementById('mbti-type').textContent;
    const nickname = typeDescriptions[mbtiType].nickname;
    const shareText = `我的MBTI性格类型是 ${mbtiType} (${nickname})！快来测测你是什么类型吧！`;

    // 尝试使用Web Share API
    if (navigator.share) {
        navigator.share({
            title: 'MBTI性格测试结果',
            text: shareText,
            url: window.location.href
        }).catch(err => {
            console.log('分享失败:', err);
            fallbackShare(shareText);
        });
    } else {
        fallbackShare(shareText);
    }
}

// 备用分享方法
function fallbackShare(text) {
    // 复制到剪贴板
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand('copy');
        alert('结果已复制到剪贴板！');
    } catch (err) {
        alert('分享文本：' + text);
    }

    document.body.removeChild(textarea);
}

// 键盘快捷键支持
document.addEventListener('keydown', (e) => {
    const testPage = document.getElementById('test-page');
    if (!testPage.classList.contains('active')) return;

    // 数字键1-5选择选项
    if (e.key >= '1' && e.key <= '5') {
        const values = [5, 3, 1, -3, -5];
        selectAnswer(values[parseInt(e.key) - 1]);
    }

    // 左右箭头键导航
    if (e.key === 'ArrowLeft') {
        previousQuestion();
    } else if (e.key === 'ArrowRight' && !document.getElementById('next-btn').disabled) {
        nextQuestion();
    }
});

// 更新雷达图
function updateRadarChart() {
    const maxScore = 75;

    // 计算每个维度的标准化值（0-80范围，用于雷达图坐标）
    const normalizeScore = (score) => {
        const percentage = Math.abs(score) / maxScore;
        return 40 + (percentage * 40); // 40是中心点，最大延伸40个单位
    };

    // 计算雷达图坐标点
    const eiValue = normalizeScore(scores.EI);
    const snValue = normalizeScore(scores.SN);
    const tfValue = normalizeScore(scores.TF);
    const jpValue = normalizeScore(scores.JP);

    // 六边形雷达图坐标计算（中心点100,100）
    const centerX = 100, centerY = 100;
    const points = [
        [centerX, centerY - eiValue], // 上 (E/I)
        [centerX + snValue * Math.cos(Math.PI / 6), centerY - snValue * Math.sin(Math.PI / 6)], // 右上 (S/N)
        [centerX + tfValue * Math.cos(Math.PI / 6), centerY + tfValue * Math.sin(Math.PI / 6)], // 右下 (T/F)
        [centerX, centerY + jpValue], // 下 (J/P)
        [centerX - tfValue * Math.cos(Math.PI / 6), centerY + tfValue * Math.sin(Math.PI / 6)], // 左下
        [centerX - snValue * Math.cos(Math.PI / 6), centerY - snValue * Math.sin(Math.PI / 6)]  // 左上
    ];

    // 更新SVG多边形
    const pointsString = points.map(p => `${p[0]},${p[1]}`).join(' ');
    const radarData = document.getElementById('radar-data');
    if (radarData) {
        radarData.setAttribute('points', pointsString);
    }
}

// 显示性格特征标签
function displayTraits(traits) {
    const container = document.getElementById('traits-tags');
    container.innerHTML = '';

    traits.forEach((trait, index) => {
        const tag = document.createElement('div');
        tag.className = 'trait-tag';
        tag.textContent = trait;
        tag.style.animationDelay = `${index * 0.1}s`;
        container.appendChild(tag);
    });
}

// 显示同类型名人
function displayCelebrities(celebrities) {
    const container = document.getElementById('celebrities-grid');
    container.innerHTML = '';

    celebrities.forEach(celeb => {
        const card = document.createElement('div');
        card.className = 'celebrity-card';
        card.innerHTML = `
            <div class="celebrity-icon">${celeb.icon}</div>
            <div class="celebrity-name">${celeb.name}</div>
            <div class="celebrity-field">${celeb.field}</div>
        `;
        container.appendChild(card);
    });
}

// 显示类型匹配度
function displayCompatibility(compatibility) {
    const container = document.getElementById('compatibility-grid');
    container.innerHTML = '';

    compatibility.forEach(comp => {
        const item = document.createElement('div');
        item.className = 'compatibility-item';
        item.innerHTML = `
            <div class="compatibility-type">${comp.type}</div>
            <div class="compatibility-info">
                <div class="compatibility-label">${comp.label}</div>
                <div class="compatibility-bar">
                    <div class="compatibility-fill" style="width: ${comp.percentage}%"></div>
                </div>
            </div>
        `;
        container.appendChild(item);
    });
}

// 页面加载完成
document.addEventListener('DOMContentLoaded', () => {
    console.log('MBTI测试工具已加载');
    console.log(`共有 ${questions.length} 道题目`);
});
