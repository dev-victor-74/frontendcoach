import { create } from "zustand";

export const useSidebarStore= create((set)=>({
    isOpen:true,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false})
}));

export const useEditorState= create((set)=>({
    isOne:true,
    isTwo:false,
    isThree:false,
    onOpenOne:()=>set({isOne:true, isTwo:false, isThree:false}),
    onOpenTwo:()=>set({isOne:false, isTwo:true, isThree:false}),
    onOpenThree:()=>set({isOne:false, isTwo:false, isThree:true}),
}));

export const useEditorSwitchState= create((set)=>({
    isHtml:true,
    isCss:false,
    isJs:false,
    onOpenHtml:()=>set({isHtml:true, isCss:false, isJs:false}),
    onOpenCss:()=>set({isHtml:false, isCss:true, isJs:false}),
    onOpenJs:()=>set({isHtml:false, isCss:false, isJs:true}),
}));

export const useIframeSize = create((set)=> ({
    isShown:false,
    iframeHeight: null,
    iframeWidth: null,
    onSet:(iframeHeight, iframeWidth)=>set({iframeHeight, iframeWidth, isShown:true}),
    onPause:()=>set({isShown:false}),

    
    isOutput:true,
    isViewChallenge: false,
    onOutput: ()=>set({isOutput:true, isViewChallenge:false}),
    onViewChallenge:()=>set({isOutput:false, isViewChallenge:true}),
}))



export const useToolsSwitch= create((set)=>({
    isBox:true,
    isBlob:false,
    isGlass:false,
    onBox:()=>set({isBox:true, isBlob:false, isGlass:false}),
    onBlob:()=>set({isBox:false, isBlob:true, isGlass:false}),
    onGlass:()=>set({isBox:false, isBlob:false, isGlass:true}),

    isPalette:true,
    isGradient:false,
    isMesh:false,
    onPalette:()=>set({isPalette:true, isGradient:false, isMesh:false}),
    onGradient:()=>set({isPalette:false, isGradient:true, isMesh:false}),
    onMesh:()=>set({isPalette:false, isGradient:false, isMesh:true}),

    isImages:true,
    isMyImages:false,
    onImages:()=>set({isImages:true, isMyImages:false}),
    onMyImages:()=>set({isImages:false, isMyImages:true}),

    modalLink:"",
    onLink:(link)=>set({modalLink:link})

}));