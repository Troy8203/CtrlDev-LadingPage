export type SocialNetwork =
  | "github"
  | "linkedin"
  | "instagram"
  | "telegram"
  | "facebook"
  | "tiktok"
  | "web";

export type MemberSocial = {
  network: SocialNetwork;
  url: string;
};

export type Member = {
  name: string;
  role: string;
  phrase?: string;
  photo?: ImageMetadata | string;
  socials?: MemberSocial[];
};
