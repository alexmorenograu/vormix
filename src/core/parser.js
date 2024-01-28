export default (model, isNew) => {
    for (const field of model.fields) {
        // if isNew set default value
        if (isNew && field.default)
            model.data[field.name] = field.default;

        // if field isRequired add rule if is empty
        if (field.isRequired)
            field.rules = [value => !!value || 'Field is required']

        const type = field.fieldType.toLowerCase();
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
                break;
            case "datetime":
                field.component = 'VCalendar';
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