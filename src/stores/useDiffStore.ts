import { create } from "zustand";
import type { IDiffPart } from "../types";
import { diff_match_patch, DIFF_INSERT, DIFF_DELETE } from "diff-match-patch";

interface TextStore {
  oldText: string;
  newText: string;
  diffResult: IDiffPart[] | null;
  isCompared: boolean;
  loading: boolean;
  
  setOldText: (text: string) => void;
  setNewText: (text: string) => void;
  compareDiff: () => void;
  reset: () => void;
}

const useDiffStore = create<TextStore>((set, get) => ({
  oldText: "",
  newText: "",
  diffResult: null,
  isCompared: false,
  loading: false,

  setOldText: (text: string) =>
    set({
      oldText: text,
      diffResult: null,
      isCompared: false,
      loading: false
    }),

  setNewText: (text: string) =>
    set({
      newText: text,
      diffResult: null,
      isCompared: false,
      loading: false,
    }),

  compareDiff: () => {
    set({ loading: true });
    const { oldText, newText } = get();
    const dmp = new diff_match_patch();

    setTimeout(() => {
      const diffs = dmp.diff_main(oldText, newText);
      dmp.diff_cleanupSemantic(diffs);

      const diffResult: IDiffPart[] = diffs.map(([op, text]) => ({
        value: text,
        added: op === DIFF_INSERT,
        removed: op === DIFF_DELETE,
      }));

      set({
        diffResult,
        isCompared: true,
        loading: false,
      });
    }, 400);
  },


  reset: () =>
    set({
      oldText: "",
      newText: "",
      diffResult: null,
      isCompared: false,
      loading: false
    }),
}));

export default useDiffStore;