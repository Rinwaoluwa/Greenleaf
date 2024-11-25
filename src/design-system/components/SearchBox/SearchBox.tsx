import { useForm } from "react-hook-form"
import { AppTextInput } from "../AppTextInput/AppTextInput"
import { Palette, palette } from "../../theme/palette"
import { useAddSearchHistory } from "../../../apis/apis";

export const SearchBox = ({ onSearch }: { onSearch: (searchTerm: string) => void }) => {
    const addSearchHistory = useAddSearchHistory();
    
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            searchQuery: "",
        },
        mode: "onSubmit",
    });
    const searchTerm = watch("searchQuery");
    
    const onSubmit = () => {
        if (searchTerm) {
            addSearchHistory.mutate(searchTerm.trim().toLowerCase());
            onSearch(searchTerm.trim().toLowerCase());
        }
    }

    return (
        <AppTextInput
            control={control}
            label="Search"
            placeholder="Rice"
            error={errors.searchQuery?.message}
            name="searchQuery"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="search"
            leftIcon="search"
            leftIconFill={palette['orange'] as Palette}
            onSubmitEditing={handleSubmit(onSubmit)}
        />
    )
}