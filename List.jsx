import React from 'react';
import { Icon } from 'antd';
import 'rc-banner-anim/assets/index.css';
import { connect } from 'dva';
import List from '../component/list';

class Banner extends React.PureComponent {

  render() {
    const { ...props } = this.props;
    const { dataSource, nav, data, isMobile } = props;
    delete props.dataSource;
    delete props.isMobile;

    return (
      <div {...props} {...dataSource.wrapper}>
        <List itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 10,
          }}
          dataSource={data.course[nav.name]}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[
                <span>
                  <Icon type="eye" style={{ marginRight: 8 }} />
                  {item.eye}
                </span>,
                <span onClick={() => {
                  this.likeClick(item.id)
                }}>
                  <Icon type="like" style={{ marginRight: 8 }} />
                  {item.like}
                </span>
              ]}
              extra={
                <img
                  width={272}
                  alt="banner"
                  src={item.img}
                />
              }
            >
              <List.Item.Meta
                title={item.title}
              />
              {item.content}
            </List.Item>

          )}
        />
      </div >
    );
  }
}

export default connect(({ nav, data }) => ({
  nav, data
}))(Banner);