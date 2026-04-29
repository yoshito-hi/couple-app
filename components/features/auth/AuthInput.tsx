import { AppInput } from "@/components/base/AppInput"
import { AppIcon } from "@/components/base/AppIcon"
import { LucideMail, KeyRound } from "lucide-react"

export const AuthInputMailAddress = () => {
  return (
    <div className="relative flex items-center">
      <AppIcon
        icon={LucideMail}
        variant="ghost"
        size="md"
        className="absolute left-1 z-10 text-muted-foreground"
      />
      <AppInput
        className="bg-gray-50 dark:bg-gray-800 border pl-12 w-full focus:bg-white"
        placeholder="メールアドレス"
      />
    </div>
  )
}

export const AuthInputPassword = () => {
  return (
    <div className="relative flex items-center">
      <AppIcon
        icon={KeyRound}
        variant="ghost"
        size="md"
        className="absolute left-1 z-10 text-muted-foreground"
      />
      <AppInput
        className="bg-gray-50 dark:bg-gray-800 border pl-12 w-full focus:bg-white"
        type="password"
        placeholder="パスワードを入力"
      />
    </div>
  )
}

