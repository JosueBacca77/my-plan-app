import Button from "../../../../../components/Button/Button";
import { BUTTON_TYPE } from "../../../../../configs/button";
import { StudentProps } from "./types";


export default function Student(studentProps: StudentProps) {

  const { navigation } = studentProps;

  return (
    <Button
      text='volver'
      onPress={() => navigation.pop()}
      variant={BUTTON_TYPE.SUBMIT}
      width={100}
    />
  )
}