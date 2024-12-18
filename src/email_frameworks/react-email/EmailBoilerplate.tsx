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
  const previewText = `HQZen Boilerplate`;

  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body
          className="bg-white my-auto mx-auto font-sans font-family-inter px-2 text-[#0c0d0e]"
          style={{ fontFamily: "'Inter', 'Arial', sans-serif" }}
        >
          <Container className="border border-[#dde1e3] border-solid max-w-[600px] w-full">
            {/* Header Section */}
            <Section className="bg-[#f4f5f6] px-[48px] py-[12px] border-b border-solid border-[#dde1e3]">
              <Row className="" cellSpacing={8}>
                <Column className="w-[130px]">
                  <Img
                    src="https://bposeats-email.s3.ap-southeast-1.amazonaws.com/hqzen.png"
                    alt="HQZen Logo"
                    className="w-[115px] h-auto"
                  />
                </Column>
                <Column>
                  <Text className="text-[#67747e]" style={{ margin: "0px" }}>
                    Find Zen in your workforce.
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Main Section */}
            <Section className="px-[48px] py-[32px]">
              <Section>
                <Heading style={headingStyle} className="my-0">
                  HQZen Boilerplate
                </Heading>
                <Text style={{ ...textStyle, marginTop: "8px" }}>
                  We are thrilled to share some incredible news regarding our
                  exclusive membership program!{" "}
                </Text>
                <Text
                  style={{
                    ...textStyle,
                    marginTop: "24px",
                    marginBottom: "24px",
                  }}
                >
                  From enhanced discounts to personalized offers, we've{" "}
                  <span className="font-semibold">tailored these updates</span>{" "}
                  with you in mind.
                </Text>
              </Section>

              {/* Avatar section */}
              <Section className="p-[20px] bg-[#f4f5f6] rounded-[4px] border border-solid border-[#dde1e3]">
                <Row>
                  <Column className="w-[36px] flex justify-start">
                    <Img
                      src="https://placehold.co/80x80/png"
                      className="w-[36px] h-[36px] rounded-full border border-solid border-[#dde1e3]"
                    />
                  </Column>
                  <Column className="w-full">
                    <Text
                      className="font-[600] text-[0.875rem] pl-[16px] text-[#0c0d0e] leading-[150%] spacing-[-0.08px]"
                      style={{ margin: "0px" }}
                    >
                      Alan Turing
                    </Text>
                    <Text
                      className="text-[0.875rem] pl-[16px] text-[#40484f] font-normal leading-[150%] spacing-[-0.08px]"
                      style={{ margin: "0px" }}
                    >
                      alan.turing@bposeats.com
                    </Text>
                    <Text
                      className="text-[0.875rem] pl-[16px] text-[#67747e] font-normal leading-[150%] spacing-[-0.08px]"
                      style={{ margin: "0px" }}
                    >
                      UI/UX Designer
                    </Text>
                  </Column>
                  <Column className="">
                    <Button
                      className="bg-white border border-solid border-[#dde1e3] p-2 rounded-[4px] text-[0.8125rem]"
                      href="https://bposeats.com"
                    >
                      <Text style={{ margin: "0px" }} className="text-gray-500">
                        Button
                      </Text>
                    </Button>
                  </Column>
                </Row>
              </Section>

              <Section>
                <Text
                  style={{
                    ...textStyle,
                    marginTop: "24px",
                    marginBottom: "24px",
                  }}
                >
                  We have curated a range of new benefits and features designed
                  to make your membership even more rewarding and enjoyable.
                </Text>
              </Section>

              {/* Table Section */}
              <Section>
                <Text>Table with Rows and columns components</Text>
              </Section>
              {/* Normal table */}
              <Section className="rounded overflow-hidden">
                <Row className=" bg-[#fafafa]">
                  <Column className="border border-solid border-[#dde1e3] border-r-0 rounded-tl w-3/12">
                    <Text
                      className="font-semibold text-[0.8125rem] text-[#40484f] py-[2px] px-[8px]"
                      style={{ margin: 0 }}
                    >
                      Name
                    </Text>
                  </Column>
                  <Column className="border border-solid border-[#dde1e3] border-r-0 w-6/12">
                    <Text
                      className="font-semibold text-[0.8125rem] text-[#40484f] py-[2px] px-[8px]"
                      style={{ margin: 0 }}
                    >
                      Email
                    </Text>
                  </Column>
                  <Column className="border border-solid border-[#dde1e3] rounded-tr w-3/12">
                    <Text
                      className="font-semibold text-[0.8125rem] text-[#40484f] py-[2px] px-[8px]"
                      style={{ margin: 0 }}
                    >
                      Date
                    </Text>
                  </Column>
                </Row>
                <Row className="">
                  <Column className="border border-solid border-[#dde1e3] border-r-0 w-3/12">
                    <Text
                      className=" text-[0.8125rem] text-[#40484f] py-[6px] px-[8px]"
                      style={{ margin: 0 }}
                    >
                      John Doe
                    </Text>
                  </Column>
                  <Column className="border border-solid border-[#dde1e3] border-r-0 w-6/12">
                    <Text
                      className="text-[0.8125rem] text-[#40484f] py-[6px] px-[8px]"
                      style={{ margin: 0 }}
                    >
                      john.doe@bposeats.com
                    </Text>
                  </Column>
                  <Column className="border border-solid border-[#dde1e3] w-3/12">
                    <Text
                      className=" text-[0.8125rem] text-[#40484f] py-[6px] px-[8px]"
                      style={{ margin: 0 }}
                    >
                      Aug 23
                    </Text>
                  </Column>
                </Row>
                <Row className="">
                  <Column className="border border-solid border-[#dde1e3] border-r-0 w-3/12 rounded-bl">
                    <Text
                      className=" text-[0.8125rem] text-[#40484f] py-[6px] px-[8px]"
                      style={{ margin: 0 }}
                    >
                      John Doe
                    </Text>
                  </Column>
                  <Column className="border border-solid border-[#dde1e3] border-r-0 w-6/12">
                    <Text
                      className="text-[0.8125rem] text-[#40484f] py-[6px] px-[8px]"
                      style={{ margin: 0 }}
                    >
                      john.doe@bposeats.com
                    </Text>
                  </Column>
                  <Column className="border border-solid border-[#dde1e3] w-3/12 rounded-br">
                    <Text
                      className=" text-[0.8125rem] text-[#40484f] py-[6px] px-[8px]"
                      style={{ margin: 0 }}
                    >
                      Aug 23
                    </Text>
                  </Column>
                </Row>
              </Section>
              <Hr className="mt-10" />

              <Section>
                <Text>Table with html table elements</Text>
              </Section>
              {/* Table with html */}
              <table className="w-full overflow-hidden border border-collapse border-solid border-[#dde1e3] rounded text-[0.8125rem] text-[#40484f]">
                <thead className="bg-[#fafafa]">
                  <tr>
                    <th className="w-3/12 border border-solid border-[#dde1e3] border-r-0 rounded-tl py-[2px] px-[8px] text-left font-semibold">
                      Name
                    </th>
                    <th className="w-6/12 border border-solid border-[#dde1e3] border-r-0 py-[2px] px-[8px] text-left font-semibold">
                      Email
                    </th>
                    <th className="w-3/12 border border-solid border-[#dde1e3] rounded-tr py-[2px] px-[8px] text-left font-semibold">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-solid border-[#dde1e3] border-r-0 py-[6px] px-[8px]">
                      John Doe
                    </td>
                    <td className="border border-solid border-[#dde1e3] border-r-0 py-[6px] px-[8px]">
                      john.doe@bposeats.com
                    </td>
                    <td className="border border-solid border-[#dde1e3] py-[6px] px-[8px]">
                      Aug 23
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-solid border-[#dde1e3] border-r-0 py-[6px] px-[8px]">
                      Jane Smith
                    </td>
                    <td className="border border-solid border-[#dde1e3] border-r-0 py-[6px] px-[8px]">
                      jane.smith@bposeats.com
                    </td>
                    <td className="border border-solid border-[#dde1e3] py-[6px] px-[8px]">
                      Aug 24
                    </td>
                  </tr>
                </tbody>
              </table>

              <Section>
                <Text
                  style={{
                    ...textStyle,
                    marginTop: "24px",
                    marginBottom: "24px",
                  }}
                >
                  We have curated a range of new benefits and features designed
                  to make your membership even more rewarding and enjoyable.
                </Text>
              </Section>
              {/* Horizontal table */}
              <Section className="rounded overflow-hidden">
                <Row className="">
                  <Column className="border border-solid border-[#dde1e3] border-r-0 rounded-tl w-3/12 bg-[#fafafa]">
                    <Text
                      className="font-semibold text-[0.8125rem] text-[#40484f] py-[2px] px-[8px]"
                      style={{ margin: 0 }}
                    >
                      Name
                    </Text>
                  </Column>
                  <Column className="border border-solid border-[#dde1e3] rounded-tr w-9/12">
                    <Text
                      className="text-[0.8125rem] text-[#40484f] py-[6px] px-[8px]"
                      style={{ margin: 0 }}
                    >
                      John Doe
                    </Text>
                  </Column>
                </Row>
                <Row>
                  <Column className="border border-solid border-[#dde1e3] border-r-0 w-3/12">
                    <Text
                      className="font-semibold text-[0.8125rem] text-[#40484f] py-[2px] px-[8px] bg-[#fafafa]"
                      style={{ margin: 0 }}
                    >
                      Email
                    </Text>
                  </Column>
                  <Column className="border border-solid border-[#dde1e3] w-9/12">
                    <Text
                      className="text-[0.8125rem] text-[#40484f] py-[6px] px-[8px]"
                      style={{ margin: 0 }}
                    >
                      john.doe@bposeats.com
                    </Text>
                  </Column>
                </Row>
                <Row>
                  <Column className="border border-solid border-[#dde1e3] border-r-0 rounded-bl w-3/12">
                    <Text
                      className="font-semibold text-[0.8125rem] text-[#40484f] py-[2px] px-[8px] bg-[#fafafa]"
                      style={{ margin: 0 }}
                    >
                      Date
                    </Text>
                  </Column>
                  <Column className="border border-solid border-[#dde1e3] rounded-br w-9/12">
                    <Text
                      className="text-[0.8125rem] text-[#40484f] py-[6px] px-[8px]"
                      style={{ margin: 0 }}
                    >
                      Aug 23
                    </Text>
                  </Column>
                </Row>
              </Section>

              <Section>
                <Text
                  style={{
                    ...textStyle,
                    marginTop: "24px",
                    marginBottom: "24px",
                  }}
                >
                  We have curated a range of new benefits and features designed
                  to make your membership even more rewarding and enjoyable.
                </Text>
              </Section>
              {/* Avatar container with table */}
              <Section className="rounded overflow-hidden">
                <Section className="py-[12px] px-[20px] bg-[#f4f5f6] border border-solid border-[#dde1e3] rounded-t">
                  <Row>
                    <Column className="w-[36px] flex justify-start">
                      <Img
                        src="https://placehold.co/80x80/png"
                        className="w-[36px] h-[36px] rounded-full border border-solid border-[#dde1e3]"
                      />
                    </Column>
                    <Column className="w-full">
                      <Text
                        className="font-[600] text-[0.875rem] pl-[16px] text-[#0c0d0e] leading-[150%] spacing-[-0.08px]"
                        style={{ margin: "0px" }}
                      >
                        Alan Turing
                      </Text>
                      <Text
                        className="text-[0.875rem] pl-[16px] text-[#40484f] font-normal leading-[150%] spacing-[-0.08px]"
                        style={{ margin: "0px" }}
                      >
                        alan.turing@bposeats.com
                      </Text>
                    </Column>
                  </Row>
                </Section>
                <Row className="">
                  <Column className="border border-solid border-[#dde1e3] border-r-0 w-3/12 bg-[#fafafa]">
                    <Text
                      className="font-semibold text-[0.8125rem] text-[#40484f] py-[2px] px-[8px]"
                      style={{ margin: 0 }}
                    >
                      Name
                    </Text>
                  </Column>
                  <Column className="border border-solid border-[#dde1e3] w-9/12">
                    <Text
                      className="text-[0.8125rem] text-[#40484f] py-[6px] px-[8px]"
                      style={{ margin: 0 }}
                    >
                      John Doe
                    </Text>
                  </Column>
                </Row>
                <Row>
                  <Column className="border border-solid border-[#dde1e3] border-r-0 w-3/12">
                    <Text
                      className="font-semibold text-[0.8125rem] text-[#40484f] py-[2px] px-[8px] bg-[#fafafa]"
                      style={{ margin: 0 }}
                    >
                      Email
                    </Text>
                  </Column>
                  <Column className="border border-solid border-[#dde1e3] w-9/12">
                    <Text
                      className="text-[0.8125rem] text-[#40484f] py-[6px] px-[8px]"
                      style={{ margin: 0 }}
                    >
                      john.doe@bposeats.com
                    </Text>
                  </Column>
                </Row>
                <Row>
                  <Column className="border border-solid border-[#dde1e3] border-r-0 rounded-bl w-3/12">
                    <Text
                      className="font-semibold text-[0.8125rem] text-[#40484f] py-[2px] px-[8px] bg-[#fafafa]"
                      style={{ margin: 0 }}
                    >
                      Date
                    </Text>
                  </Column>
                  <Column className="border border-solid border-[#dde1e3] rounded-br w-9/12">
                    <Text
                      className="text-[0.8125rem] text-[#40484f] py-[6px] px-[8px]"
                      style={{ margin: 0 }}
                    >
                      Aug 23
                    </Text>
                  </Column>
                </Row>
              </Section>

              {/* CTA Button */}
              <div className="mt-10 pt-10"></div>
              <Section>
                {" "}
                <Button
                  className="w-full rounded-[4px] bg-[#008FF5]  py-[12px] text-center font-semibold text-white"
                  href="https://hqzen.com"
                >
                  Button
                </Button>
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

const headingStyle = {
  fontSize: "1.25rem",
  fontWeight: 600,
  letterSpacing: "-0.16px",
  lineHeight: "1.5",
  textDecoration: "none",
  color: "#0c0d0e",
};

const textStyle = {
  fontSize: "0.9375rem",
  fontWeight: 400,
  letterSpacing: "-0.08px",
  lineHeight: "150%",
  textDecoration: "none",
  color: "#0c0d0e",
  margin: "0px",
};
