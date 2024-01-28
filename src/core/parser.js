import VCalendar from "../components/VCalendar.vue";

export default (model) => {
    for (const field of model.fields) {
        const type = field.fieldType.toLowerCase();
        model.value[field.name] = field.default;
        if (field.isRequired)
            field.rules = [value => !!value || 'Field is required']

        switch (type) {
            case "string":
                field.component = "VTextField";
                field.clearable = true;
                break;
            case "int":
                field.component = "VTextField";
                field.type = "number";
                field.clearable = true;
                break;
            case "boolean":
                field.component = "VCheckbox";
                if (!field.isRequired) field.indeterminate = true;
                model.value[field.name] = field.default;
                break;
            case "datetime":
                field.component = VCalendar;
                field.clearable = true;
                break;
            case "relation":
                field.component = "VAutocomplete";
                field.items = field.values.map((value) =>
                    Object.values(value).join(" - "),
                );
                field.clearable = true;
                break;
            default:
                console.warn(field.fieldType, "type is not implemented yet");
        }
    }
    return model;
};
