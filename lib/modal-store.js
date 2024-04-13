import {create} from "zustand";

const useModalStore = create((set)=>(
  {
  modalType: null,
  modalData:{},
  isOpen:false,
  onOpen: (modalType = "", modalData = {})=> set({isOpen: true, modalType, modalData}),
  onClose: ()=>set({modalType: null, isOpen: false,modalData:{}})
 }
));

export default useModalStore;



