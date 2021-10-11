import {
    Bg,
    BlueMoon,
    NightMoon,
    SmallMoon,
    Star,
    LineDubheMerak,
    LineMegrezDubhe,
    LineAliothMegrez,
    MizarAlioth,
    AlkaidMizar,
    LineMerakPhecda,
    LineMerakMegrez,
} from "./styledBackground";

export const Background = () => {
    const handleMouseMove = e => {
        var moveX = (e.pageX * -1 / 5);
        var moveY = (e.pageY * -1 / 5);
        document.getElementById("bg").style.transform = "translateX(" + moveX + "px) translateY(" + moveY + "px)";
    };

    return (
        <Bg
            id="bg"
            onMouseMove={(e) => handleMouseMove(e)}
        >
            <BlueMoon></BlueMoon>
            <NightMoon></NightMoon>
            <SmallMoon></SmallMoon>
            <Star one></Star>
            <Star two></Star>
            <Star three></Star>
            <Star four></Star>
            <Star five></Star>
            <Star six></Star>
            <Star seven></Star>
            <Star eight></Star>
            <Star nine></Star>
            <Star ten></Star>

            <Star one1></Star>
            <Star two1></Star>
            <Star three1></Star>
            <Star four1></Star>
            <Star five1></Star>
            <Star six1></Star>
            <Star seven1></Star>
            <Star eight1></Star>
            <Star nine1></Star>
            <Star ten1></Star>

            <Star Alkaid></Star>
            {/* <AlkaidMizar></AlkaidMizar> */}
            <Star Mizar></Star>
            {/* <MizarAlioth></MizarAlioth> */}
            <Star Alioth></Star>
            {/* <LineAliothMegrez></LineAliothMegrez> */}
            <Star Megrez></Star>
            {/* <LineMegrezDubhe></LineMegrezDubhe> */}
            <Star Dubhe></Star>
            {/* <LineDubheMerak></LineDubheMerak> */}
            <Star Merak></Star>
            {/* <LineMerakPhecda></LineMerakPhecda> */}
            <Star Phecda></Star>
            {/* <LineMerakMegrez></LineMerakMegrez> */}
        </Bg>
    );
};