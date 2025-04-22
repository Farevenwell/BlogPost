import React, {useRef} from 'react'
import PostList from "@/components/PostList"
import {BottomSheetModal} from "@gorhom/bottom-sheet"
import FloatingButton from "@/components/FloatingButton"
import ModalBottomSheet from "@/components/ModalBottomSheet"
import PostForm from "@/components/PostForm"
import {Post} from "@/interfaces/Post";
import {useCreate, useDelete, useUpdate} from "@/services/queries/posts/usePostMutations";

const Home = () => {
    const editBottomSheetModal = useRef<BottomSheetModal>(null)
    const addBottomSheetModal = useRef<BottomSheetModal>(null)
    const [post, setPost] = React.useState<Post | undefined>(undefined)
    const {addPost} = useCreate()
    const {editPost} = useUpdate()
    const {removePost} = useDelete()
    
    return (
        <>
            <PostList
                onEdit={(post) => {
                    setPost(post)
                    editBottomSheetModal.current?.present()
                }}
                onDelete={(id) => {
                    removePost(id)
                }}
            />
            <ModalBottomSheet bottomSheetModalRef={addBottomSheetModal}>
                <PostForm
                    onSubmit={(post) => {
                        addPost(post)
                        addBottomSheetModal.current?.dismiss()
                    }}
                />
            </ModalBottomSheet>
            <ModalBottomSheet bottomSheetModalRef={editBottomSheetModal}>
                <PostForm
                    post={post}
                    onSubmit={(post) => {
                        editPost(post)
                        editBottomSheetModal.current?.dismiss()
                    }}
                />
            </ModalBottomSheet>
            <FloatingButton
                onPress={() => {
                    addBottomSheetModal.current?.present()
                }}
            />
        </>
    )
}

export default Home
