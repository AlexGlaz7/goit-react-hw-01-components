import styled from '@emotion/styled';

const ProfileCard = styled.div`
    text-align: center;
        margin-left: auto;
    margin-right: auto;
}
       

`;
const Description = styled.div`
  padding: 20px;
  background-color: #FFBF00;
`;
const UserPhoto = styled.img`
  border-radius: 30%;
`;
const UserName = styled.p`
  font-weight: 700;
  font-size: 22px;
  margin-top: 0;
  margin-bottom: 10px;
`;
const UserInformation = styled.p`
  opacity: 0.6;
  margin-top: 0;
  margin-bottom: 10px;
`;

const Stats = styled.ul`
  background-color: grey;
  list-style: none;
  margin-block-start: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 0;
  height: 70px;
  padding: 0;
`;
const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 33%;
  justify-content: center;
  width: calc(100% / 3);
  background-color: #e7ecf2;
  border: 1px solid;
`;

const StatsQuantity = styled.span`
  font-weight: 700;
  margin-top: 20px;
`;
export {
  StatsQuantity,
  ProfileCard,
  StatsItem,
  Description,
  UserPhoto,
  UserName,
  UserInformation,
  Stats,
};
