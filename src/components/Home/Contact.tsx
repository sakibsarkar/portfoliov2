"use client";
import Link from "next/link";
import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    toast.success("Message sent successfully!");
    const form = e.target as HTMLFormElement;
    form.reset();
  }
  return (
    <section className="w-full min-h-screen bg-[#1A1A1A] py-20 px-4">
      <div className="site_layout">
        <h2
          className="text-4xl font-bold mb-2 text-white textShadow"
          style={{ color: "white !important" }}
        >
          My <span className="text-mainTxt">Contact</span>
        </h2>
        <p className="text-gray-400 mb-12">
          Let&apos;s connect and discuss how we can work together.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-6 bg-[#242424] border-none text-white">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-mainTxt mb-1">Email</h4>
                <Link
                  href="mailto:sakibsarkar707@gmail"
                  className="text-gray-300 hover:underline"
                >
                  sakibsarkar707@gmail.com
                </Link>
              </div>
              <div>
                <h4 className="text-mainTxt mb-1">Location</h4>
                <p className="text-gray-300">Dhaka, Bangladesh</p>
              </div>
              <div>
                <h4 className="text-mainTxt mb-1">Social</h4>
                <div className="flex gap-4 text-gray-300">
                  <a
                    href="https://github.com/sakibsarkar"
                    className="hover:text-mainTxt transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/nazmul-islam-sakib-204938253"
                    className="hover:text-mainTxt transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.facebook.com/me.facebook.id"
                    className="hover:text-mainTxt transition-colors"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-[#242424] border-none">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  required
                  className="bg-[#1A1A1A] border-none text-white placeholder:text-gray-500"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-[#1A1A1A] border-none text-white placeholder:text-gray-500"
                />
              </div>
              <div>
                <Input
                  placeholder="Subject"
                  required
                  className="bg-[#1A1A1A] border-none text-white placeholder:text-gray-500"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  required
                  className="bg-[#1A1A1A] border-none text-white placeholder:text-gray-500 min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#00FFF0] text-black hover:bg-[#00FFF0]/90 transition-colors"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <IoSend className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
