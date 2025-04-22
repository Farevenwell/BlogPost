import React, {useMemo} from 'react'
import {BottomSheetModal, BottomSheetView,} from '@gorhom/bottom-sheet'

interface BottomSheetProps {
    bottomSheetModalRef: React.RefObject<BottomSheetModal>;
    children?: React.ReactNode;
    onChange?: (index: number) => void
}

const ModalBottomSheet: React.FC<BottomSheetProps> = (props: BottomSheetProps) => {
    const snapPoints = useMemo(() => ['50%'], []);
    return (
        <BottomSheetModal
            ref={props.bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            onChange={props.onChange}
        >
            <BottomSheetView>
                {props.children}
            </BottomSheetView>
        </BottomSheetModal>
    );
};
export default ModalBottomSheet;