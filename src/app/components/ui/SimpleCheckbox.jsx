import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function SimpleCheckbox() {
  return (
    <div className="flex items-center gap-3">
      <Checkbox
        id="terms"
        className="
        dark:data-[state=checked]:bg-[#FF725E]
        data-[state=checked]:bg-[#FF725E]
    dark:data-[state=checked]:border-[#FF725E]
    data-[state=checked]:border-[#FF725E]
       cursor-pointer "
      />

      <Label
        htmlFor="terms"
        className="text-sm text-gray-700 dark:text-gray-400 cursor-pointer"
      >
        Keep me logged in
      </Label>
    </div>
  );
}
