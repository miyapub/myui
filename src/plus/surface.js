import $ from 'jquery';
const Surface=(evt)=>{
    var surface = $(evt.target);
            if (surface.find(".material-ink").length == 0) {
             surface.prepend("<div class='material-ink'></div>");
            }
            var ink = surface.find(".material-ink");
            ink.removeClass("animate");
            if (!ink.height() && !ink.width()) {
                var d = Math.max(surface.outerWidth(), surface.outerHeight());
                ink.css({height: d, width: d});
            }
            var x = event.pageX - surface.offset().left - (ink.width() / 2);
            var y = event.pageY - surface.offset().top - (ink.height() / 2);
            var rippleColor = surface.data("ripple-color");
            ink.css({
                top: y + 'px',
                left: x + 'px',
                background: rippleColor
            }).addClass("animate");
}
module.exports = Surface;