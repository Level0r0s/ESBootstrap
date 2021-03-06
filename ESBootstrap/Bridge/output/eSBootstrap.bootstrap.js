Bridge.assembly("ESBootstrap", function ($asm, globals) {
    "use strict";

    Bridge.define("ESBootstrap.Bootstrap.Viewport", {
        inherits: [ESBootstrap.Widget],
        ctor: function (width, initial_scale, maximum_scale, user_scalable) {
            if (width === void 0) { width = "device-width"; }
            if (initial_scale === void 0) { initial_scale = "1"; }
            if (maximum_scale === void 0) { maximum_scale = "1"; }
            if (user_scalable === void 0) { user_scalable = ""; }

            this.$initialize();
            ESBootstrap.Widget.ctor.call(this, Bridge.merge(document.createElement('meta'), {
                name: "viewport"
            } ), null);
            this.setContent(width, initial_scale, maximum_scale, user_scalable);
        },
        setContent: function (width, initial_scale, maximum_scale, user_scalable) {
            if (width === void 0) { width = "device-width"; }
            if (initial_scale === void 0) { initial_scale = "1"; }
            if (maximum_scale === void 0) { maximum_scale = "1"; }
            if (user_scalable === void 0) { user_scalable = ""; }
            this.setAttribute("content", System.String.format("width ={0}, initial-scale=1{1}", width, (Bridge.referenceEquals(user_scalable, "no") ? ", user-scalable=no" : "")));
        },
        getContent: function () {
            return this.getAttribute("content");
        }
    });
});
