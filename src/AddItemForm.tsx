import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {Input} from "./Input";
import {Button} from "./Button";


type AddItemFormPropsType = {
    addTask:(title: string, todolistId: string)=>void
    id:string

}
export const AddItemForm  = (props: AddItemFormPropsType ) => {

     const [title, setTitle] = useState<string>("");

     const [error, setError] = useState<boolean>(false);

     /*const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
         setTitle(e.currentTarget.value)
         setError(false)
     }*/
     /*const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
         if (e.key === "Enter") {
             props.callback();
         }
     }*/


         const addTask = () => {
             const trimAddTitle = title.trim()
             if (trimAddTitle) {
                 props.addTask(trimAddTitle, props.id)
             } else {
                 setError(true)
             }
             setTitle("")
         }

         return (
             <div>
                 <Input
                     title={title}
                     setTitle={setTitle}
                     error={error}
                     setError={setError}
                     callback={addTask}
                 />
                 <Button
                     title={"+"}
                     callback={addTask}
                 />
                 {error && <div className={"errorMessage"}>Title to required</div>}
             </div>
         )
     }
