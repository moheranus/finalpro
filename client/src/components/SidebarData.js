import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
// mongodb+srv://haja:haja123@cluster0.yfr7o.mongodb.net/test
// import App from '../App';
export const SidebarData = [
  {

    title: 'Documents',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    // subNav: [
    //   {
    //     title: 'Research',
    //     path: '/research',
    //     icon: <IoIcons.IoIosPaper />
    //   },
    //   {
    //     title: 'Thesis',
    //     path: '/thesis',
    //     icon: <IoIcons.IoIosPaper />
    //   }
    // ]
  },



  {

    title: 'StudentSpace',
    path: '/studentspace',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Social',
        path: '/social',
        icon: <RiIcons.RiUserShared2Fill/>
      },
      {
        title: 'Group',
        path: '/Group',
        icon: <IoIcons.IoIosPaper />
    },
      {
        title: 'Send Draft',
        path: '/draft',
        icon: <IoIcons.IoIosPaper />
    },
      {
        title: 'NextMeeting',
        path: '/meeting',
        icon: <IoIcons.IoIosPaper />
    },
    {
      title: 'Proposal',
      path: '/proposal',
      icon: <IoIcons.IoIosPaper />
  },
    {
      title: 'PendingComments',
      path: '/comment',
      icon: <FaIcons.FaEnvelopeOpenText />
    }
    ]
  },
  {


    title: 'Send draft',
    path: '/draft',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Group',
    path: '/group',
    icon: <IoIcons.IoMdPeople />
  },


{
  title: 'Notification',
  path: '/notification',
  icon: <RiIcons.RiNotificationOffFill/>
},
{
  title: 'ProposalRequest',
  path: '/ProposalRequest',
  icon: <RiIcons.RiNotificationOffFill/>
},
{
  title: 'ProjectRate',
  path: '/ProjectRate',
  icon: <RiIcons.RiNotificationOffFill/>
},
{
  title: 'RegisterStudent',
  path: '/registerStudent',
  icon: <RiIcons.RiNotificationOffFill/>
}


];
