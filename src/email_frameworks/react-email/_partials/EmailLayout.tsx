import {
  Body,
  Container,
  Column,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";
import config from "../../../../tailwind.config";
import Header from "./Header";

interface HQZenEmailLayoutProp {
  previewText?: string;
  children?: React.ReactNode;
}

export const VercelInviteUserEmail = ({
  previewText = "HQZen Boilerplate",
  children,
}: HQZenEmailLayoutProp) => {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <title>{previewText}</title>
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind config={config}>
        <Body
          className="bg-white my-auto mx-auto font-sans font-family-inter px-2 text-[#0c0d0e]"
          style={{ fontFamily: "'Inter', 'Arial', sans-serif" }}
        >
          <Container className="border border-[#dde1e3] border-solid max-w-[600px] w-full">
            {/* Header Section */}
            <Header />

            {/* Main Section */}
            {children}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VercelInviteUserEmail;
