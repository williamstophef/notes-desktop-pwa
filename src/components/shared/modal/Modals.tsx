import { Suspense, lazy } from "react";

/** Custom Components */
const CategoryModal = lazy(() => import("./Category"));
const NoteModal = lazy(() => import("./Note"));

function Modals() {
  return (
    <Suspense fallback={<div></div>}>
      <CategoryModal />
      <NoteModal />
    </Suspense>
  );
}

export default Modals;
