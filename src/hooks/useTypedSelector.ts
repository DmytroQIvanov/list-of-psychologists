import { RootState } from './../redux/index';
import {TypedUseSelectorHook, useSelector} from "react-redux";

export const useTypedSelector:TypedUseSelectorHook<RootState> = useSelector
