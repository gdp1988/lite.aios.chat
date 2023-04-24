import { ChatList } from '@/global';

export interface LaunchPadProps {
  currentChat?: ChatList;
  chatList: ChatList[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClickItem: React.Dispatch<React.SetStateAction<ChatList | undefined>>;
}