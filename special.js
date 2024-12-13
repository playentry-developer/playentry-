Entry.block = {
    default_block: {
        // 하드웨어 기본 색상
        color: "#00979D",
        skeleton: "basic",
        // 순차블록은 마지막에 이미지가 들어가도록 되어 있습니다.
        // 이미지도 parameter로 관리 됨으로 %1값이 마지막에 들어갑니다.
        template: "변수 A값에 1더하기 %1",
        params: [
            {
                type: "Indicator",
                // hardware_03.png가 하드웨어 아이콘 입니다.
                img: "block_icon/hardware_03.png",
                size: 12
            }
        ],
        events: {},
        def: {
            type: "default_block"
        },
        class: "test",
        isNotFor: [],
        func: function (sprite, script) {
            Entry.test.A++;
            // return 이 없는 경우는 별다른 값을 반환하지 않고, 다음블럭으로 진행됩니다.
            // return script.callReturn() 은 과거코드로, 생략가능합니다.
        }
    }
}
