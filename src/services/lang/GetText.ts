import DefaultConfig from "../../config/DefaultConfig"
import AppText from "../../langs/AppTexts"

const getText = (key: string, lang?: string) => {
    return AppText[key as keyof any][lang as keyof any] ??
        AppText[key as keyof any][DefaultConfig.defaultLang]
}

export default getText;