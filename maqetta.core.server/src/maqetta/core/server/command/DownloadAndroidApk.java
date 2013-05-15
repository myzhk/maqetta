package maqetta.core.server.command;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.davinci.server.user.IUser;
import org.maqetta.server.Command;

public class DownloadAndroidApk  extends Command{

	@Override
	public void handleCommand(HttpServletRequest req, HttpServletResponse resp,
			IUser user) throws IOException {
		// TODO Auto-generated method stub
		String apkPath = req.getParameter("apkPath");
		System.out.println(apkPath);
		File apkFile = new File(apkPath);
		FileInputStream is = new FileInputStream(apkFile);
		int bytesIn = 0;
		byte[] readBytes = new byte[2156];
		resp.reset();
		resp.setContentType("application/x-download");
		resp.setHeader("Content-Disposition",
				"attachment; filename=" + apkFile.getName());
		OutputStream os = resp.getOutputStream();
		try {
			while ((bytesIn = is.read(readBytes)) != -1) {
				os.write(readBytes, 0, bytesIn);
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				is.close();
				os.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	
	}

}
