import { Tailwind } from "@react-email/tailwind";
import React from "react";
import config from "../../../../tailwind.config";
import { Section, Row, Column, Text, Img } from "@react-email/components";

type Props = {};

const Header = (props: Props) => {
  return (
    <Tailwind config={config}>
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
    </Tailwind>
  );
};

export default Header;
