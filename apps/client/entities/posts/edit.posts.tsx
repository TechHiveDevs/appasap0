
import { 
  Edit,
  SimpleForm,
  
TextInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditPosts(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="title" variant="outlined"   />
<TextInput source="content" variant="outlined"   />

      </SimpleForm>
    </Edit>
  );
}