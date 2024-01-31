import React, { useEffect, useState } from "react";
import { getDataListnew } from "../../Apidata/index";
import { Button, Col, Image, List, Row, Space, Spin, Table } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Item from "antd/es/list/Item";
import Title from "antd/es/skeleton/Title";
import { useNavigate } from "react-router-dom";
import moment from "moment";
const Index = () => {
  const navigate = useNavigate();
  const [list, setlist] = useState([]);
  const [loading, setloading] = useState(true);
  const getList = async () => {
    let result = await getDataListnew();
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
      <div style={{ fontSize: 38, marginBottom: 25 }}>
        Danh sách tin mới nhất
      </div>
      <div>
        {loading === true ? (
          <div>
            <Spin spinning={loading}></Spin>
          </div>
        ) : (
          <>
            <List
              loading={loading}
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
                        <Space>
                          {item?.description && (
                            <Space>
                              <div>{item?.description}</div>
                            </Space>
                          )}
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
            <Button
              type="primary"
              onClick={() => {
                navigate("detail");
              }}
            >
              Xem tất cả các tin tức
            </Button>
          </>
        )}
      </div>
      {/* <Table dataSource={[]}></Table> */}
    </div>
  );
};

export default Index;
