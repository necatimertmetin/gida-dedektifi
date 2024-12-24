import React from "react";
import { Box, Paper, Typography, Avatar, Button } from "@mui/material";

// Blog verisini alıyoruz
const blogPostData = {
  title: "Züber Nutzilla Kakaolu Fındık Kreması",
  author: "Züber",
  createdDate: "2024-11-02T07:00:00Z",
  content: [
    {
      type: "text",
      value:
        "İçeriğinde ilave şeker veya tatlandırıcı bulunmayan Züber Kakaolu Fındık Kreması market raflarında artık Nutzilla ismiyle yer alıyor. Ürünün içeriği değişmezken, firma tarafından isim değişikliğine gidilme kararı alındığı anlaşılıyor.",
    },
    {
      type: "image",
      value: "https://via.placeholder.com/600x300",
    },
    {
      type: "text",
      value:
        "315 gr’lık cam kavanozlarda satışa sunulan ürün ambalajının ön yüzünde ekmeğe sürülmüş kakaolu fındık kremalarından çıkan oklarla 'şeker ilavesiz', 'katkısız ve koruyucusuz' ve 'palm yağı içermez' ifadeleri ile fındık görselleri yer alıyor.",
    },
  ],
  comments: [
    {
      commentId: 3125,
      username: "ahmethan",
      text: "İçeriğindeki süt tozundan bahsedilmemiş?",
      photoUrl:
        "https://imagedelivery.net/Zcjn5gwAVfrAzXjwv_K0uw/961542d5-e638-44cf-baa8-42da2f3c1700/public",
      createdDate: "2024-11-02T08:00:00Z",
    },
    {
      commentId: 3236,
      username: "metin sarar",
      text: "Ürünlerine TSE den helal Sertifika aldıklarını mesajla bildirdiler...",
      photoUrl:
        "https://imagedelivery.net/Zcjn5gwAVfrAzXjwv_K0uw/aef0fae3-6fee-4eb2-bc2b-ab30990aad00/public",
      createdDate: "2024-11-02T09:00:00Z",
    },
  ],
};

export const BlogPost: React.FC = () => {
  return (
    <Box sx={{ padding: 3 }}>
      {/* Blog Post Başlığı */}
      <Paper sx={{ padding: 3, marginBottom: 4, borderRadius: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          {blogPostData.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <strong>By {blogPostData.author}</strong> -{" "}
          {new Date(blogPostData.createdDate).toLocaleString()}
        </Typography>
      </Paper>

      {/* Blog Post İçeriği */}
      {blogPostData.content.map((item, index) => {
        if (item.type === "text") {
          return (
            <Paper
              key={index}
              sx={{ padding: 2, marginBottom: 2, borderRadius: 2 }}
            >
              <Typography variant="body1">{item.value}</Typography>
            </Paper>
          );
        } else if (item.type === "image") {
          return (
            <Box key={index} sx={{ marginBottom: 2 }}>
              <img
                src={item.value}
                alt="Blog post image"
                style={{ width: "100%", borderRadius: 8 }}
              />
            </Box>
          );
        }
        return null;
      })}

      {/* Yorumlar */}
      {blogPostData.comments.map((comment) => (
        <Paper
          key={comment.commentId}
          sx={{ padding: 3, marginBottom: 4, borderRadius: 2 }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar src={comment.photoUrl} sx={{ marginRight: 2 }} />
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {comment.username}
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            {comment.text}
          </Typography>

          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginTop: 1 }}
          >
            {new Date(comment.createdDate).toLocaleString()}
          </Typography>
        </Paper>
      ))}

      {/* Yorum Ekleme */}
      <Paper sx={{ padding: 3, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Add a New Comment
        </Typography>
        <Button variant="contained" sx={{ width: "100%" }}>
          Add Comment
        </Button>
      </Paper>
    </Box>
  );
};
