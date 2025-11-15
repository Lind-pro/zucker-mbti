// 16种MBTI类型的详细描述
const typeDescriptions = {
    "INTJ": {
        nickname: "建筑师",
        title: "富有想象力和战略性的思考者，一切皆有计划",
        traits: ["战略思维", "独立", "创新", "理性", "追求完美", "有远见"],
        celebrities: [
            { name: "埃隆·马斯克", field: "企业家", icon: "🚀" },
            { name: "牛顿", field: "科学家", icon: "🍎" },
            { name: "尼采", field: "哲学家", icon: "📚" },
            { name: "克里斯托弗·诺兰", field: "导演", icon: "🎬" }
        ],
        compatibility: [
            { type: "ENFP", label: "最佳搭档", percentage: 95 },
            { type: "ENTP", label: "智力碰撞", percentage: 90 },
            { type: "INFJ", label: "深度理解", percentage: 85 }
        ],
        description: `
            <h3>性格特点：</h3>
            <ul>
                <li>独立、果断、有远见</li>
                <li>善于战略规划和系统思考</li>
                <li>追求知识和能力的提升</li>
                <li>对传统和权威持怀疑态度</li>
                <li>重视效率和逻辑</li>
            </ul>

            <h3>优势：</h3>
            <p>战略思维强、独立性高、目标明确、善于创新、逻辑能力强</p>

            <h3>可能的挑战：</h3>
            <p>可能过于理性、不善于表达情感、对他人要求过高、容易显得冷漠</p>

            <h3>适合的职业：</h3>
            <p>科学家、工程师、战略规划师、企业顾问、软件架构师</p>
        `
    },
    "INTP": {
        nickname: "逻辑学家",
        title: "具有创新精神的发明家，对知识有着止不住的渴望",
        traits: ["逻辑分析", "好奇心强", "创新", "独立思考", "理论派", "客观"],
        celebrities: [
            { name: "爱因斯坦", field: "物理学家", icon: "🧪" },
            { name: "比尔·盖茨", field: "企业家", icon: "💻" },
            { name: "达尔文", field: "生物学家", icon: "🔬" },
            { name: "拉里·佩奇", field: "Google创始人", icon: "🔍" }
        ],
        compatibility: [
            { type: "ENTJ", label: "互补伙伴", percentage: 90 },
            { type: "INFJ", label: "思想共鸣", percentage: 85 },
            { type: "ENFP", label: "激发灵感", percentage: 80 }
        ],
        description: `
            <h3>性格特点：</h3>
            <ul>
                <li>热爱理论和抽象概念</li>
                <li>善于分析和解决复杂问题</li>
                <li>追求逻辑的完美性</li>
                <li>对新想法充满好奇</li>
                <li>重视智力和能力</li>
            </ul>

            <h3>优势：</h3>
            <p>分析能力强、思维创新、客观公正、适应能力强、好学</p>

            <h3>可能的挑战：</h3>
            <p>容易拖延、难以做决定、可能忽视实际应用、社交能力较弱</p>

            <h3>适合的职业：</h3>
            <p>研究员、程序员、数学家、哲学家、系统分析师</p>
        `
    },
    "ENTJ": {
        nickname: "指挥官",
        title: "大胆、富有想象力且意志强大的领导者，总能找到或创造解决方法",
        traits: ["领导力", "果断", "战略眼光", "高效", "自信", "目标导向"],
        celebrities: [
            { name: "史蒂夫·乔布斯", field: "企业家", icon: "🍏" },
            { name: "拿破仑", field: "军事家", icon: "⚔️" },
            { name: "玛格丽特·撒切尔", field: "政治家", icon: "👔" },
            { name: "戈登·拉姆齐", field: "厨师", icon: "👨‍🍳" }
        ],
        compatibility: [
            { type: "INTP", label: "智慧组合", percentage: 90 },
            { type: "INFP", label: "温柔平衡", percentage: 85 },
            { type: "ENFP", label: "活力搭档", percentage: 88 }
        ],
        description: `
            <h3>性格特点：</h3>
            <ul>
                <li>天生的领导者</li>
                <li>果断、自信、有魄力</li>
                <li>善于组织和管理</li>
                <li>目标导向，追求效率</li>
                <li>喜欢挑战和竞争</li>
            </ul>

            <h3>优势：</h3>
            <p>领导能力强、决策果断、战略眼光好、执行力强、善于激励他人</p>

            <h3>可能的挑战：</h3>
            <p>可能过于强势、不够耐心、忽视他人感受、对批评敏感</p>

            <h3>适合的职业：</h3>
            <p>企业高管、创业者、律师、管理顾问、项目经理</p>
        `
    },
    "ENTP": {
        nickname: "辩论家",
        title: "聪明好奇的思考者，无法抗拒智力上的挑战",
        traits: ["思维敏捷", "创新", "辩论", "适应力强", "好奇", "灵活"],
        celebrities: [
            { name: "托马斯·爱迪生", field: "发明家", icon: "💡" },
            { name: "本杰明·富兰克林", field: "政治家", icon: "⚡" },
            { name: "小罗伯特·唐尼", field: "演员", icon: "🎭" },
            { name: "马克·扎克伯格", field: "Facebook创始人", icon: "📱" }
        ],
        compatibility: [
            { type: "INFJ", label: "深度连接", percentage: 92 },
            { type: "INTJ", label: "思想碰撞", percentage: 90 },
            { type: "ENFJ", label: "互补伙伴", percentage: 85 }
        ],
        description: `
            <h3>性格特点：</h3>
            <ul>
                <li>思维敏捷，喜欢辩论</li>
                <li>富有创造力和想象力</li>
                <li>善于发现新机会</li>
                <li>喜欢挑战传统观念</li>
                <li>适应能力强</li>
            </ul>

            <h3>优势：</h3>
            <p>创新能力强、思维活跃、适应性好、善于沟通、视野开阔</p>

            <h3>可能的挑战：</h3>
            <p>容易分散注意力、执行力不足、可能过于争论、难以完成常规任务</p>

            <h3>适合的职业：</h3>
            <p>企业家、营销专家、发明家、记者、演说家</p>
        `
    },
    "INFJ": {
        nickname: "提倡者",
        title: "安静而神秘，同时鼓舞人心且不知疲倦的理想主义者",
        traits: ["洞察力", "同理心", "理想主义", "有原则", "深度", "创造力"],
        celebrities: [
            { name: "柏拉图", field: "哲学家", icon: "🏛️" },
            { name: "尼尔森·曼德拉", field: "政治家", icon: "✊" },
            { name: "甘地", field: "社会活动家", icon: "🕊️" },
            { name: "卡尔·荣格", field: "心理学家", icon: "🧠" }
        ],
        compatibility: [
            { type: "ENTP", label: "完美互补", percentage: 92 },
            { type: "ENFP", label: "精神伴侣", percentage: 90 },
            { type: "INTJ", label: "深度理解", percentage: 85 }
        ],
        description: `
            <h3>性格特点：</h3>
            <ul>
                <li>富有洞察力和同理心</li>
                <li>理想主义，追求意义</li>
                <li>善于理解他人</li>
                <li>有坚定的价值观</li>
                <li>追求和谐与深度连接</li>
            </ul>

            <h3>优势：</h3>
            <p>洞察力强、富有创意、坚持原则、善于帮助他人、有深度</p>

            <h3>可能的挑战：</h3>
            <p>过于理想化、容易倦怠、难以处理冲突、可能过于敏感</p>

            <h3>适合的职业：</h3>
            <p>心理咨询师、作家、教育工作者、社会工作者、人力资源</p>
        `
    },
    "INFP": {
        nickname: "调停者",
        title: "诗意、善良的利他主义者，总是热情地为正义事业而努力",
        traits: ["理想主义", "创造力", "真诚", "善良", "同理心", "追求意义"],
        celebrities: [
            { name: "威廉·莎士比亚", field: "剧作家", icon: "✍️" },
            { name: "J.K.罗琳", field: "作家", icon: "📖" },
            { name: "约翰尼·德普", field: "演员", icon: "🎪" },
            { name: "奥黛丽·赫本", field: "演员", icon: "🌹" }
        ],
        compatibility: [
            { type: "ENFJ", label: "理想搭档", percentage: 93 },
            { type: "ENTJ", label: "互补组合", percentage: 85 },
            { type: "INFJ", label: "灵魂伴侣", percentage: 88 }
        ],
        description: `
            <h3>性格特点：</h3>
            <ul>
                <li>理想主义者，追求真善美</li>
                <li>富有创造力和想象力</li>
                <li>重视个人价值和真实性</li>
                <li>善良、同理心强</li>
                <li>追求内心的和谐</li>
            </ul>

            <h3>优势：</h3>
            <p>富有创意、善于倾听、真诚、适应能力强、追求完美</p>

            <h3>可能的挑战：</h3>
            <p>过于理想化、容易受伤、难以面对批评、可能过于情绪化</p>

            <h3>适合的职业：</h3>
            <p>作家、艺术家、心理咨询师、设计师、翻译</p>
        `
    },
    "ENFJ": {
        nickname: "主人公",
        title: "有魅力鼓舞人心的领导者，有能力吸引听众",
        traits: ["领导力", "同理心", "魅力", "激励他人", "组织能力", "热情"],
        celebrities: [
            { name: "奥普拉·温弗瑞", field: "主持人", icon: "📺" },
            { name: "马丁·路德·金", field: "民权领袖", icon: "🎤" },
            { name: "奥巴马", field: "政治家", icon: "🎙️" },
            { name: "本·阿弗莱克", field: "演员", icon: "🌟" }
        ],
        compatibility: [
            { type: "INFP", label: "完美互补", percentage: 93 },
            { type: "ISFP", label: "温柔搭档", percentage: 88 },
            { type: "ENFP", label: "活力组合", percentage: 90 }
        ],
        description: `
            <h3>性格特点：</h3>
            <ul>
                <li>富有魅力，善于激励他人</li>
                <li>同理心强，关心他人</li>
                <li>天生的领导者</li>
                <li>善于沟通和组织</li>
                <li>追求和谐与成长</li>
            </ul>

            <h3>优势：</h3>
            <p>领导能力强、善于激励、同理心强、沟通能力好、有远见</p>

            <h3>可能的挑战：</h3>
            <p>可能过于理想化、对批评敏感、容易过度承诺、难以说"不"</p>

            <h3>适合的职业：</h3>
            <p>教师、人力资源经理、销售经理、政治家、培训师</p>
        `
    },
    "ENFP": {
        nickname: "竞选者",
        title: "热情、有创造力且善于社交的自由精神，总能找到理由微笑",
        traits: ["热情", "创造力", "灵活", "乐观", "善于社交", "好奇心"],
        celebrities: [
            { name: "罗宾·威廉姆斯", field: "演员", icon: "🎭" },
            { name: "艾伦·德杰尼勒斯", field: "主持人", icon: "😄" },
            { name: "沃尔特·迪士尼", field: "企业家", icon: "🏰" },
            { name: "威尔·史密斯", field: "演员", icon: "🎬" }
        ],
        compatibility: [
            { type: "INTJ", label: "完美互补", percentage: 95 },
            { type: "INFJ", label: "深度连接", percentage: 90 },
            { type: "ENTJ", label: "活力组合", percentage: 88 }
        ],
        description: `
            <h3>性格特点：</h3>
            <ul>
                <li>热情洋溢，充满活力</li>
                <li>富有创造力和想象力</li>
                <li>善于社交，朋友众多</li>
                <li>追求自由和可能性</li>
                <li>喜欢探索新事物</li>
            </ul>

            <h3>优势：</h3>
            <p>热情、创新、适应能力强、善于激励他人、视野开阔</p>

            <h3>可能的挑战：</h3>
            <p>容易分散注意力、执行力不足、可能过于情绪化、难以完成常规任务</p>

            <h3>适合的职业：</h3>
            <p>市场营销、公关、演员、创意总监、心理咨询师</p>
        `
    },
    "ISTJ": {
        nickname: "物流师",
        title: "实际且注重事实的个人，可靠性不容怀疑",
        traits: ["可靠", "务实", "有条理", "负责", "传统", "细心"],
        celebrities: [
            { name: "乔治·华盛顿", field: "政治家", icon: "🎩" },
            { name: "沃伦·巴菲特", field: "投资家", icon: "💰" },
            { name: "安吉拉·默克尔", field: "政治家", icon: "👩‍💼" },
            { name: "杰夫·贝索斯", field: "企业家", icon: "📦" }
        ],
        compatibility: [
            { type: "ESFP", label: "活力互补", percentage: 87 },
            { type: "ESTP", label: "行动派", percentage: 85 },
            { type: "ISFJ", label: "稳定伙伴", percentage: 90 }
        ],
        description: `
            <h3>性格特点：</h3>
            <ul>
                <li>务实、负责、可靠</li>
                <li>注重细节和事实</li>
                <li>遵守规则和传统</li>
                <li>有条理，善于组织</li>
                <li>做事认真严谨</li>
            </ul>

            <h3>优势：</h3>
            <p>可靠、负责、高效、专注、逻辑能力强</p>

            <h3>可能的挑战：</h3>
            <p>可能过于刻板、不善于变通、难以表达情感、抗拒变化</p>

            <h3>适合的职业：</h3>
            <p>会计师、审计员、行政管理、军人、工程师</p>
        `
    },
    "ISFJ": {
        nickname: "守卫者",
        title: "非常专注而温暖的守护者，时刻准备保护爱着的人们",
        traits: ["温暖", "忠诚", "细心", "负责", "体贴", "传统"],
        celebrities: [
            { name: "特蕾莎修女", field: "慈善家", icon: "🙏" },
            { name: "凯特·米德尔顿", field: "王室成员", icon: "👑" },
            { name: "罗莎·帕克斯", field: "民权活动家", icon: "✊" },
            { name: "比昂斯", field: "歌手", icon: "🎤" }
        ],
        compatibility: [
            { type: "ESTP", label: "活力搭档", percentage: 88 },
            { type: "ESFP", label: "温暖组合", percentage: 90 },
            { type: "ISTJ", label: "稳定伙伴", percentage: 90 }
        ],
        description: `
            <h3>性格特点：</h3>
            <ul>
                <li>温暖、体贴、忠诚</li>
                <li>注重细节，观察力强</li>
                <li>有责任心，乐于助人</li>
                <li>重视传统和稳定</li>
                <li>追求和谐</li>
            </ul>

            <h3>优势：</h3>
            <p>可靠、细心、善良、忠诚、支持性强</p>

            <h3>可能的挑战：</h3>
            <p>可能过于谦逊、难以拒绝他人、抗拒变化、容易倦怠</p>

            <h3>适合的职业：</h3>
            <p>护士、教师、图书管理员、行政助理、社会工作者</p>
        `
    },
    "ESTJ": {
        nickname: "总经理",
        title: "出色的管理者，无与伦比的管理事物或人的能力",
        traits: ["组织力", "果断", "高效", "传统", "领导力", "务实"],
        celebrities: [
            { name: "亨利·福特", field: "企业家", icon: "🚗" },
            { name: "文斯·隆巴迪", field: "教练", icon: "🏈" },
            { name: "艾玛·沃森", field: "演员", icon: "📚" },
            { name: "希拉里·克林顿", field: "政治家", icon: "🏛️" }
        ],
        compatibility: [
            { type: "ISFP", label: "温柔平衡", percentage: 86 },
            { type: "ISTP", label: "务实组合", percentage: 85 },
            { type: "ESFJ", label: "组织伙伴", percentage: 88 }
        ],
        description: `
            <h3>性格特点：</h3>
            <ul>
                <li>实际、果断、高效</li>
                <li>善于管理和组织</li>
                <li>遵守规则和程序</li>
                <li>重视传统和秩序</li>
                <li>责任心强</li>
            </ul>

            <h3>优势：</h3>
            <p>组织能力强、执行力强、可靠、决策果断、重视效率</p>

            <h3>可能的挑战：</h3>
            <p>可能过于强势、不够灵活、忽视他人感受、抗拒创新</p>

            <h3>适合的职业：</h3>
            <p>企业管理、警察、法官、银行经理、项目经理</p>
        `
    },
    "ESFJ": {
        nickname: "执政官",
        title: "极有同情心、善于社交且广受欢迎的人，总是热心地帮助他人",
        traits: ["热心", "善良", "合作", "组织力", "社交", "负责"],
        celebrities: [
            { name: "泰勒·斯威夫特", field: "歌手", icon: "🎵" },
            { name: "詹妮弗·加纳", field: "演员", icon: "🎬" },
            { name: "萨拉·佩林", field: "政治家", icon: "🗳️" },
            { name: "丹尼·凯", field: "演员", icon: "🎭" }
        ],
        compatibility: [
            { type: "ISFP", label: "温暖搭档", percentage: 90 },
            { type: "ISTP", label: "平衡组合", percentage: 85 },
            { type: "ESTJ", label: "合作伙伴", percentage: 88 }
        ],
        description: `
            <h3>性格特点：</h3>
            <ul>
                <li>热情、友善、外向</li>
                <li>重视和谐与合作</li>
                <li>善于照顾他人</li>
                <li>有责任心，乐于助人</li>
                <li>重视传统和社会规范</li>
            </ul>

            <h3>优势：</h3>
            <p>善于合作、支持性强、有组织能力、忠诚、热心</p>

            <h3>可能的挑战：</h3>
            <p>可能过于在意他人看法、难以处理冲突、抗拒变化、容易倦怠</p>

            <h3>适合的职业：</h3>
            <p>护士、教师、活动策划、客户服务经理、公关专员</p>
        `
    },
    "ISTP": {
        nickname: "鉴赏家",
        title: "大胆而实际的实验者，擅长使用各种工具",
        traits: ["灵活", "务实", "冷静", "独立", "动手能力", "适应力"],
        celebrities: [
            { name: "克林特·伊斯特伍德", field: "演员", icon: "🤠" },
            { name: "贝尔·格里尔斯", field: "探险家", icon: "🏔️" },
            { name: "汤姆·克鲁斯", field: "演员", icon: "✈️" },
            { name: "迈克尔·乔丹", field: "篮球运动员", icon: "🏀" }
        ],
        compatibility: [
            { type: "ESFJ", label: "互补伙伴", percentage: 85 },
            { type: "ESTJ", label: "务实组合", percentage: 85 },
            { type: "ENFP", label: "激发活力", percentage: 82 }
        ],
        description: `
            <h3>性格特点：</h3>
            <ul>
                <li>独立、务实、灵活</li>
                <li>善于解决实际问题</li>
                <li>喜欢动手操作</li>
                <li>冷静、理性</li>
                <li>追求自由和刺激</li>
            </ul>

            <h3>优势：</h3>
            <p>适应能力强、动手能力强、冷静、客观、解决问题能力强</p>

            <h3>可能的挑战：</h3>
            <p>可能过于冒险、难以表达情感、不善于长期规划、容易厌倦</p>

            <h3>适合的职业：</h3>
            <p>机械师、飞行员、技术员、工程师、运动员</p>
        `
    },
    "ISFP": {
        nickname: "探险家",
        title: "灵活有魅力的艺术家，时刻准备探索和体验新事物",
        traits: ["艺术", "温和", "灵活", "敏感", "审美", "真诚"],
        celebrities: [
            { name: "迈克尔·杰克逊", field: "歌手", icon: "🎤" },
            { name: "玛丽莲·梦露", field: "演员", icon: "💋" },
            { name: "大卫·贝克汉姆", field: "足球运动员", icon: "⚽" },
            { name: "莫扎特", field: "作曲家", icon: "🎹" }
        ],
        compatibility: [
            { type: "ESFJ", label: "温暖搭档", percentage: 90 },
            { type: "ESTJ", label: "平衡组合", percentage: 86 },
            { type: "ENFJ", label: "理解伙伴", percentage: 88 }
        ],
        description: `
            <h3>性格特点：</h3>
            <ul>
                <li>温和、友善、敏感</li>
                <li>富有艺术气息</li>
                <li>追求美和和谐</li>
                <li>活在当下</li>
                <li>重视个人价值</li>
            </ul>

            <h3>优势：</h3>
            <p>富有创意、灵活、善良、审美能力强、适应能力强</p>

            <h3>可能的挑战：</h3>
            <p>可能过于敏感、难以做长期规划、逃避冲突、容易受情绪影响</p>

            <h3>适合的职业：</h3>
            <p>艺术家、设计师、音乐家、摄影师、兽医</p>
        `
    },
    "ESTP": {
        nickname: "企业家",
        title: "聪明、精力充沛且善于感知的人，真正享受生活在边缘的快感",
        traits: ["行动力", "灵活", "冒险", "务实", "社交", "适应力"],
        celebrities: [
            { name: "唐纳德·特朗普", field: "企业家", icon: "🏢" },
            { name: "麦当娜", field: "歌手", icon: "🎤" },
            { name: "布鲁斯·威利斯", field: "演员", icon: "🔫" },
            { name: "欧内斯特·海明威", field: "作家", icon: "✍️" }
        ],
        compatibility: [
            { type: "ISFJ", label: "温柔平衡", percentage: 88 },
            { type: "ISTJ", label: "稳定组合", percentage: 85 },
            { type: "ESFP", label: "活力搭档", percentage: 90 }
        ],
        description: `
            <h3>性格特点：</h3>
            <ul>
                <li>精力充沛，行动力强</li>
                <li>善于把握机会</li>
                <li>喜欢冒险和刺激</li>
                <li>务实、灵活</li>
                <li>善于社交</li>
            </ul>

            <h3>优势：</h3>
            <p>适应能力强、行动力强、善于解决实际问题、有感染力、灵活</p>

            <h3>可能的挑战：</h3>
            <p>可能过于冲动、缺乏耐心、不善于长期规划、容易厌倦常规</p>

            <h3>适合的职业：</h3>
            <p>销售、企业家、警察、急救人员、运动员</p>
        `
    },
    "ESFP": {
        nickname: "表演者",
        title: "自发的、精力充沛且热情的表演者——生活在他们周围永远不会无聊",
        traits: ["热情", "友善", "乐观", "灵活", "表现力", "活在当下"],
        celebrities: [
            { name: "玛丽莲·梦露", field: "演员", icon: "💃" },
            { name: "艾尔顿·约翰", field: "歌手", icon: "🎹" },
            { name: "杰米·奥利弗", field: "厨师", icon: "👨‍🍳" },
            { name: "米莉·波比·布朗", field: "演员", icon: "🌟" }
        ],
        compatibility: [
            { type: "ISFJ", label: "温暖搭档", percentage: 90 },
            { type: "ISTJ", label: "互补组合", percentage: 87 },
            { type: "ESTP", label: "活力伙伴", percentage: 90 }
        ],
        description: `
            <h3>性格特点：</h3>
            <ul>
                <li>热情、友善、外向</li>
                <li>喜欢成为焦点</li>
                <li>活在当下，享受生活</li>
                <li>富有创造力</li>
                <li>善于社交</li>
            </ul>

            <h3>优势：</h3>
            <p>热情、适应能力强、善于激励他人、富有创意、观察力强</p>

            <h3>可能的挑战：</h3>
            <p>可能过于冲动、难以长期规划、容易分散注意力、对批评敏感</p>

            <h3>适合的职业：</h3>
            <p>演员、活动策划、销售、导游、公关专员</p>
        `
    }
};
