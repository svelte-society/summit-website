import BooleanInput from "./BooleanInput.svelte";
import DateInput from "./DateInput.svelte";
import MultiSelect from "./MultiSelect.svelte";
import NumberInput from "./NumberInput.svelte";
import SelectInput from "./SelectInput.svelte";
import TextArea from "./TextArea.svelte";
import TextInput from "./TextInput.svelte";
import URLInput from "./URLInput.svelte";

export const fieldComponents = new Map([
	["text", TextInput],
	["textarea", TextArea],
	["number", NumberInput],
	["date", DateInput],
	["url", URLInput],
	["select", SelectInput],
	["checkbox", BooleanInput],
	["multiselect", MultiSelect],
]);
