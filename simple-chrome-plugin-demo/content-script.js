(function () {
    'use strict';
    const AssistAudit = {
        TitleProcess: function () {
            try {
                const TitleElement = document.getElementsByClassName("ant-input")[0];
                const TitleStr = TitleElement.getAttribute("value");

                //判读标题是否合法,如果标题违法,变成红色
                if (TitleStr) {
                    const StyleStr = TitleElement.getAttribute("style") + "color: red;";
                    TitleElement.setAttribute("style", StyleStr);
                    console.log("修改状态成功!");
                }
            } catch (error) {
                console.log("出错了");
            }
        },
        OMLevelProcess: function () {
            try {
                const liElements = document.getElementsByClassName("ant-card _3DPw4 ant-card-bordered")[0]
                    .getElementsByTagName("li");
                //判读标题是否合法,如果标题违法,变成红色
                for (let notDel_counter = 0; notDel_counter < liElements.length; notDel_counter++) {
                    let Tag = liElements[notDel_counter].outerText.split(':')[0];
                    if (Tag === "OM 等级") {
                        if (int(liElements[notDel_counter].getElementsByTagName("label")) > 2) {
                            liElements[notDel_counter].getElementsByTagName("span")[0].setAttribute("style", "color: yellow");
                            console.log("修改状态成功!");
                            break;
                        }
                    }
                }
            } catch (error) {
                console.log('出错了');
            }
        },
        Process: function () {
            this.TitleProcess();
            this.OMLevelProcess();
        }
    };

    $(document).ready(function () {
        AssistAudit.Process();

        //为防止ajax异步延时加载的广告隔2s再清除一次
        setTimeout(function () {
            AssistAudit.Process();
        }, 2000)
    });
})();



