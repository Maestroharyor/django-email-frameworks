import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface VercelInviteUserEmailProps {
  username?: string;
  userImage?: string;
  invitedByUsername?: string;
  invitedByEmail?: string;
  teamName?: string;
  teamImage?: string;
  inviteLink?: string;
  inviteFromIp?: string;
  inviteFromLocation?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const VercelInviteUserEmail = ({
  username,
  userImage,
  invitedByUsername,
  invitedByEmail,
  teamName,
  teamImage,
  inviteLink,
  inviteFromIp,
  inviteFromLocation,
}: VercelInviteUserEmailProps) => {
  const previewText = `Join ${invitedByUsername} on Vercel`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-[#dde1e3] border-solid">
            {/* Header Section */}
            <Section className="bg-[#f4f5f6] px-[48px] py-[12px]">
              <Row className="">
                <Column className="w-[115px]">
                  <Img
                    src="https://bposeats-email.s3.ap-southeast-1.amazonaws.com/hqzen.png"
                    alt="HQZen Logo"
                    className="w-[115px] h-auto pr-5"
                  />
                </Column>
                <Column>
                  <Text className="text-[#67747e]">
                    Find Zen in your workforce.
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Main Section */}
            <Section className="px-[48px] py-[32px]">
              <Section>
                <Heading className="text-lg font-semibold tracking-tight leading-6 text-left text-[#0c0d0e] no-underline my-0">
                  HQZen Boilerplate
                </Heading>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

VercelInviteUserEmail.PreviewProps = {
  username: "alanturing",
  userImage: `${baseUrl}/static/vercel-user.png`,
  invitedByUsername: "Alan",
  invitedByEmail: "alan.turing@example.com",
  teamName: "Enigma",
  teamImage: `${baseUrl}/static/vercel-team.png`,
  inviteLink: "https://vercel.com/teams/invite/foo",
  inviteFromIp: "204.13.186.218",
  inviteFromLocation: "São Paulo, Brazil",
} as VercelInviteUserEmailProps;

export default VercelInviteUserEmail;
