// MBTI测试问题
// dimension: EI (外向-内向), SN (感觉-直觉), TF (思考-情感), JP (判断-感知)
// direction: 1 表示偏向第一个字母 (E/S/T/J), -1 表示偏向第二个字母 (I/N/F/P)

const questions = [
    // E-I 维度 (外向 vs 内向) - 15题
    {
        id: 1,
        text: "我喜欢参加聚会和社交活动，能从中获得能量",
        dimension: "EI",
        direction: 1
    },
    {
        id: 2,
        text: "我更喜欢独处或与少数亲密朋友相处",
        dimension: "EI",
        direction: -1
    },
    {
        id: 3,
        text: "我在人群中感到精力充沛",
        dimension: "EI",
        direction: 1
    },
    {
        id: 4,
        text: "长时间社交后我需要独处来恢复精力",
        dimension: "EI",
        direction: -1
    },
    {
        id: 5,
        text: "我倾向于主动结识新朋友",
        dimension: "EI",
        direction: 1
    },
    {
        id: 6,
        text: "我在陌生环境中比较谨慎，不会主动交谈",
        dimension: "EI",
        direction: -1
    },
    {
        id: 7,
        text: "我喜欢成为关注的焦点",
        dimension: "EI",
        direction: 1
    },
    {
        id: 8,
        text: "我更喜欢倾听而不是发言",
        dimension: "EI",
        direction: -1
    },
    {
        id: 9,
        text: "我喜欢边说边想，通过交谈来整理思路",
        dimension: "EI",
        direction: 1
    },
    {
        id: 10,
        text: "我需要先独自思考，再与他人分享想法",
        dimension: "EI",
        direction: -1
    },
    {
        id: 11,
        text: "我很容易与陌生人展开对话",
        dimension: "EI",
        direction: 1
    },
    {
        id: 12,
        text: "我有几个深交的朋友，而不是很多泛泛之交",
        dimension: "EI",
        direction: -1
    },
    {
        id: 13,
        text: "我喜欢团队合作，在团队中表现更好",
        dimension: "EI",
        direction: 1
    },
    {
        id: 14,
        text: "我更喜欢独立工作，能更专注",
        dimension: "EI",
        direction: -1
    },
    {
        id: 15,
        text: "我倾向于分享个人经历和感受",
        dimension: "EI",
        direction: 1
    },

    // S-N 维度 (感觉 vs 直觉) - 15题
    {
        id: 16,
        text: "我更关注具体的事实和细节",
        dimension: "SN",
        direction: 1
    },
    {
        id: 17,
        text: "我更关注整体概念和未来可能性",
        dimension: "SN",
        direction: -1
    },
    {
        id: 18,
        text: "我喜欢按部就班地遵循既定方法",
        dimension: "SN",
        direction: 1
    },
    {
        id: 19,
        text: "我喜欢尝试新方法和创新想法",
        dimension: "SN",
        direction: -1
    },
    {
        id: 20,
        text: "我更相信实际经验而非理论",
        dimension: "SN",
        direction: 1
    },
    {
        id: 21,
        text: "我喜欢思考抽象概念和理论",
        dimension: "SN",
        direction: -1
    },
    {
        id: 22,
        text: "我注重现在和实际情况",
        dimension: "SN",
        direction: 1
    },
    {
        id: 23,
        text: "我经常思考未来和各种可能性",
        dimension: "SN",
        direction: -1
    },
    {
        id: 24,
        text: "我喜欢按照说明书和规则做事",
        dimension: "SN",
        direction: 1
    },
    {
        id: 25,
        text: "我喜欢找到问题的创新解决方案",
        dimension: "SN",
        direction: -1
    },
    {
        id: 26,
        text: "我倾向于关注事物的实用性",
        dimension: "SN",
        direction: 1
    },
    {
        id: 27,
        text: "我经常沉浸在想象和白日梦中",
        dimension: "SN",
        direction: -1
    },
    {
        id: 28,
        text: "我更喜欢使用已被证明有效的方法",
        dimension: "SN",
        direction: 1
    },
    {
        id: 29,
        text: "我喜欢探索新的理念和观点",
        dimension: "SN",
        direction: -1
    },
    {
        id: 30,
        text: "我注重具体的细节而非整体印象",
        dimension: "SN",
        direction: 1
    },

    // T-F 维度 (思考 vs 情感) - 15题
    {
        id: 31,
        text: "我做决定时主要基于逻辑分析",
        dimension: "TF",
        direction: 1
    },
    {
        id: 32,
        text: "我做决定时会优先考虑对他人的影响",
        dimension: "TF",
        direction: -1
    },
    {
        id: 33,
        text: "我认为客观公正比人情更重要",
        dimension: "TF",
        direction: 1
    },
    {
        id: 34,
        text: "我在意和谐的人际关系",
        dimension: "TF",
        direction: -1
    },
    {
        id: 35,
        text: "我倾向于批判性思考和分析问题",
        dimension: "TF",
        direction: 1
    },
    {
        id: 36,
        text: "我很容易感同身受，理解他人感受",
        dimension: "TF",
        direction: -1
    },
    {
        id: 37,
        text: "我认为真理比人际和谐更重要",
        dimension: "TF",
        direction: 1
    },
    {
        id: 38,
        text: "我不喜欢与人产生冲突，会尽量避免",
        dimension: "TF",
        direction: -1
    },
    {
        id: 39,
        text: "我喜欢辩论，即使可能冒犯他人",
        dimension: "TF",
        direction: 1
    },
    {
        id: 40,
        text: "我在表达意见时会考虑对方的感受",
        dimension: "TF",
        direction: -1
    },
    {
        id: 41,
        text: "我认为理性客观比情感重要",
        dimension: "TF",
        direction: 1
    },
    {
        id: 42,
        text: "我很容易被他人的情绪所影响",
        dimension: "TF",
        direction: -1
    },
    {
        id: 43,
        text: "我更看重能力和效率",
        dimension: "TF",
        direction: 1
    },
    {
        id: 44,
        text: "我更看重团队氛围和成员感受",
        dimension: "TF",
        direction: -1
    },
    {
        id: 45,
        text: "我倾向于用头脑而非心灵做决定",
        dimension: "TF",
        direction: 1
    },

    // J-P 维度 (判断 vs 感知) - 15题
    {
        id: 46,
        text: "我喜欢制定详细的计划并严格执行",
        dimension: "JP",
        direction: 1
    },
    {
        id: 47,
        text: "我喜欢保持灵活性，随机应变",
        dimension: "JP",
        direction: -1
    },
    {
        id: 48,
        text: "我喜欢事情井井有条，按计划进行",
        dimension: "JP",
        direction: 1
    },
    {
        id: 49,
        text: "我在压力下工作效率更高",
        dimension: "JP",
        direction: -1
    },
    {
        id: 50,
        text: "我会提前完成任务，避免最后一刻赶工",
        dimension: "JP",
        direction: 1
    },
    {
        id: 51,
        text: "我倾向于拖延，在截止日期前才开始行动",
        dimension: "JP",
        direction: -1
    },
    {
        id: 52,
        text: "我喜欢做决定并尽快执行",
        dimension: "JP",
        direction: 1
    },
    {
        id: 53,
        text: "我喜欢保持选择开放，不急于做决定",
        dimension: "JP",
        direction: -1
    },
    {
        id: 54,
        text: "我的工作环境通常很整洁有序",
        dimension: "JP",
        direction: 1
    },
    {
        id: 55,
        text: "我的工作环境比较随意，东西摆放自由",
        dimension: "JP",
        direction: -1
    },
    {
        id: 56,
        text: "我喜欢按照日程表安排生活",
        dimension: "JP",
        direction: 1
    },
    {
        id: 57,
        text: "我喜欢顺其自然，随遇而安",
        dimension: "JP",
        direction: -1
    },
    {
        id: 58,
        text: "我认为规则应该被遵守",
        dimension: "JP",
        direction: 1
    },
    {
        id: 59,
        text: "我认为规则可以根据情况灵活调整",
        dimension: "JP",
        direction: -1
    },
    {
        id: 60,
        text: "我喜欢事情有明确的结论",
        dimension: "JP",
        direction: 1
    }
];
