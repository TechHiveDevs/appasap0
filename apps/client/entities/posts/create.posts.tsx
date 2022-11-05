
import { 
  Create,
  SimpleForm,
  
TextInput,
} from "react-admin";

// ------------------------------------------------

export default function CreatePosts(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="title" variant="outlined"   />
<TextInput source="content" variant="outlined"   />

        </SimpleForm>
      </Create>
    );
  }
