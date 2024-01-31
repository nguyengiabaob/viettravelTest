import React, { useEffect, useState } from "react";
import { getAllDataListnew, getDataListnew } from "../../Apidata/index";
import { Col, Image, List, Row, Space, Spin, Table } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Item from "antd/es/list/Item";
import { useLocation, useParams } from "react-router-dom";
import moment from "moment";
const Detail = (props) => {
  const location = useLocation();

  const [list, setlist] = useState([]);
  const [loading, setloading] = useState(true);
  const getList = async () => {
    let result = await getAllDataListnew();
    if (result.data) {
      setlist(result.data?.articles);
    }
  };
  useEffect(() => {
    setloading(true);
    getList();
    setloading(false);
  }, []);

  return (
    <div>
      <div>
        <div style={{ fontSize: 38, marginBottom: 25 }}>
          Danh sách các tin tức
        </div>
        {loading === true ? (
          <div>
            <Spin spinning={loading}></Spin>
          </div>
        ) : (
          <List
            dataSource={list}
            renderItem={(item, index) => {
              return (
                <Item>
                  <Row style={{ width: "100%" }} gutter={[8, 4]}>
                    <Col lg={4}>
                      <Image
                        className="img"
                        width={160}
                        height={160}
                        src={item?.urlToImage}
                      />
                    </Col>
                    <Col lg={20}>
                      <div
                        onClick={() => {
                          window.open(item?.url);
                        }}
                        style={{ marginBottom: 8 }}
                        className="title"
                      >
                        {item?.title}
                      </div>
                      <Space wrap={false}>
                        {/* <div>Mô tả</div> */}
                        <div>{item?.description}</div>
                      </Space>
                    </Col>
                    <Space>
                      <div style={{ marginLeft: 16 }}>
                        Ngày đăng :{" "}
                        {moment(item?.publishedAt).format("DD/MM/YYYY")}
                      </div>
                      <div style={{ marginLeft: 16 }}>
                        Tác giả: {item?.author}
                      </div>
                    </Space>
                  </Row>
                </Item>
              );
            }}
          />
        )}

        {/* <Table dataSource={[]}></Table> */}
      </div>
    </div>
  );
};

export default Detail;
