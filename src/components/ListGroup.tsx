import React from "react";
import { Item, Label, Statistic, Grid } from "semantic-ui-react";
import LabelGroup from "./LabelGroup";

export interface ListGroupProps {
  data: any;
  theme: string;
}

const ListGroup: React.FC<ListGroupProps> = (props) => {
  return (
    <Item.Group>
      {props.data.map((item: any, index: number) => (
        <Grid key={index} container columns="equal">
          <Grid.Column textAlign="center">
            <Statistic>
              {item.date}

              <Statistic.Label
                style={{
                  fontSize: "0.8rem",
                  color: props.theme === "dark" ? "#dcdfe6" : "black",
                }}
              >
                {item.dateLabel}
              </Statistic.Label>
            </Statistic>
          </Grid.Column>

          <Grid.Column width={13}>
            <Item style={{ backgroundColour: "red" }}>
              {item.github && (
                <a href={item.github}>
                  <Label
                    size="massive"
                    icon="github"
                    floating
                    circular
                    style={{
                      border: "none",
                      color: props.theme === "dark" ? "#dcdfe6" : "black",
                      backgroundColor: "transparent",
                    }}
                  ></Label>
                </a>
              )}
              <Item.Content>
                {item.url ? (
                  <Item.Header as="a">
                    <a style={{ textDecoration: "underline" }} href={item.url}>
                      {item.title}
                    </a>
                  </Item.Header>
                ) : (
                  <Item.Header>
                    {" "}
                    <b style={{ fontWeight: "900" }}> {item.title}</b>
                  </Item.Header>
                )}
                <Item.Meta>
                  <span style={{ color: "#a0a5ad" }} className="cinema">
                    {item.subtitle}
                  </span>
                </Item.Meta>
                <Item.Description
                  style={{ marginTop: "1rem", marginBottom: "0.8rem" }}
                >
                  {item.description}
                  <ul>
                    {item.points?.map((point: any) => (
                      <li key={item.title + "-point-" + index}>{point}</li>
                    ))}
                  </ul>
                </Item.Description>
                <Item.Extra>
                  <LabelGroup theme={props.theme} items={item.tags} />
                </Item.Extra>
              </Item.Content>
            </Item>
          </Grid.Column>
        </Grid>
      ))}
    </Item.Group>
  );
};

export default ListGroup;
