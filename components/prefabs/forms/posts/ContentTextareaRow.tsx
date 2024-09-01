import { capitalizeWords } from "@/lib/utils";
import { ExtendedUser } from "@/next-auth-d";

import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

interface ContentTextareaRowProps {
  form: any;
  user?: ExtendedUser;
}

const ContentTextareaRow = ({ form, user }: ContentTextareaRowProps) => {
  return (
    <FormField
      control={form.control}
      name="content"
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Textarea
              {...field}
              className="resize-none"
              placeholder={`What's on your mind, ${capitalizeWords(
                user?.first_name
              )} ?`}
              rows={4}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default ContentTextareaRow;
