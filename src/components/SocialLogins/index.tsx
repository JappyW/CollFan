import { googleLogin } from "@/app/actions";
import { Button } from "@/components/ui/button";

export const SocialLogins = () => {
  return (
    <form action={googleLogin}>
      <Button type="submit" className="bg-white" name="action" value="google">
        Google
      </Button>
    </form>
  );
};
