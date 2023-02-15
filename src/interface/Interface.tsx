//---------------------------------------Interface User-------------------------------------//
export interface UserProps {
  nickname: string;
  email: string;
  password: string;
  phone: string;
  files: string;
  legendFiles?: string;
}
//---------------------------------------Interface Offer-------------------------------------//
export interface OfferProps {
  id: string;
  picture: string;
  title: string;
  body: string;
  price: string;
}

//---------------------------------------Interface cardOffer-------------------------------//

export interface CardOfferProps {
  cardOffer: OfferProps;
}

//---------------------------------------Interface Topic-------------------------------------//

export interface TopicProps {
  id: string;
  title: string;
  body: string;
  url: string;
}

//---------------------------------------Interface cardTopic-------------------------------//

export interface CardTopicPtops {
  cardTopic: TopicProps;
}

//---------------------------------------Interface PayloadToken-------------------------------//

export interface PayLoadTokenProps {
  exp: number;
  iat: number;
  id: string;
  email: string;
  role: string;
}
