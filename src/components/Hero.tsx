import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Instagram, Youtube, Linkedin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  platform: z.string(),
  handle: z.string(),
});
export const Hero = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      platform: "",
      handle: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const res = await fetch(
        "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZlMDYzMDA0M2M1MjY4NTUzNzUxMzAi_pc",
        {
          method: "POST",

          body: JSON.stringify(data),
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const responseData = await res.json(); // Assuming Pabbly returns JSON
      console.log("Response:", responseData);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <motion.span
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full"
          >
            Master the Art of Success
          </motion.span>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="text-4xl mb-6 leading-tight font-extrabold md:text-6xl"
          >
            Transform Your Occult Science Practice into a Thriving Business
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="text-lg md:text-xl text-muted-foreground mb-8"
          >
            Turn your mystical expertise into a prosperous enterprise with our
            proven business strategies and guidance.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="bg-primary rounded-2xl p-8 text-white"
        >
          <h2 className="text-2xl font-bold mb-2 text-center">
            Start Your Transformation
          </h2>
          <p className="text-primary-foreground/80 mb-6 text-center">
            Fill out the form below to get started
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        className="bg-white text-black"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 bg-white/10 border border-r-0 border-white/20 rounded-l-md">
                          +91
                        </span>
                        <Input
                          type="tel"
                          placeholder="Your WhatsApp number"
                          className="bg-white text-black rounded-l-none"
                          {...field}
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormItem>
                <FormLabel>Social Media</FormLabel>
                <div className="grid grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="platform"
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-white text-black w-full">
                            <SelectValue
                              placeholder={<Instagram className="w-4 h-4" />}
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="instagram">
                            <div className="flex items-center gap-2">
                              <Instagram className="w-4 h-4" />
                              <span>Instagram</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="youtube">
                            <div className="flex items-center gap-2">
                              <Youtube className="w-4 h-4" />
                              <span>YouTube</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="linkedin">
                            <div className="flex items-center gap-2">
                              <Linkedin className="w-4 h-4" />
                              <span>LinkedIn</span>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="handle"
                    render={({ field }) => (
                      <FormControl>
                        <Input
                          placeholder="@yourhandle"
                          className="bg-white text-black col-span-2"
                          {...field}
                        />
                      </FormControl>
                    )}
                  />
                </div>
              </FormItem>

              <button
                type="submit"
                className="w-full bg-white text-primary font-medium py-2.5 rounded-lg hover:bg-white/90 transition-colors mt-6"
              >
                Get Started
              </button>

              <p className="text-xs text-center text-primary-foreground/80">
                By submitting this form, you agree to our Terms of Service and
                Privacy Policy.
              </p>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};
