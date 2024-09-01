import { Audience } from "@prisma/client";

import { FormField } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AudienceInputRow = ({ form }: { form: any }) => {
  return (
    <FormField
      control={form.control}
      name="audience"
      render={({ field }) => (
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <SelectTrigger id="framework">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value={Audience.Public}>{Audience.Public}</SelectItem>
            <SelectItem value={Audience.Friends}>{Audience.Friends}</SelectItem>
            <SelectItem value={Audience.Only}>{Audience.Only}</SelectItem>
          </SelectContent>
        </Select>
      )}
    />
  );
};

export default AudienceInputRow;
