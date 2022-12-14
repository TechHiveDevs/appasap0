
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
} from "react-admin";

// ------------------------------------------------

export default function ShowPosts(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
<TextField source="title" />
<TextField source="content" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}